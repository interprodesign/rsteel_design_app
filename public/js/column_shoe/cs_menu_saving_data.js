CS_MENU_DATA = (function () {

    var details_container = {
        name: '',
        surname: '',
        organization: '',
        adress: '',
        phone: '',
        email: '',
        project_name: '',
        project_id: '',
        project_location: '',
        notes: '',
    }; 
    
    var factors_container = {
        column_gamma_c:'1.5',
        column_gamma_acc:'0.85',
        column_gamma_s:'1.15',
        column_k:'0.6',
        grt_gamma_c: '1.5',
        grt_gamma_acc: '0.85',
        grt_gamma_s: '1.15',
        grt_k: '0.6',
        anchor_gamma_m2:'1.25',
        anchor_ab: '1.0',
        grt_eta:'0.9',
        anchor_gamma_bolt:'1.25',
        anchor_k1:'1.0',
        anchor_mu:'0.2'
    };

    // Details 
    var initDetails = function(){
        for (var i in details_container) jQuery('#' + i).val(details_container[i]);
    };

    // Factors
    var initFactors = function () {
        for (var i in factors_container) jQuery('#' + i).val(factors_container[i]);
    };

    // Layout -------------------------------------------------------------------------------------
    var layout_container = {
        layout_saved:false,
        init_sec : 'rect',
        init_shoe : "RPK-N2",
        init_bolt : "RPP-P",
        data:{}
    };
    
    var radio_arr = [
        'cs_corner_shoe', 
        'cs_rebar_corner_1_1',
        'cs_rebar_corner_2_1',
        'cs_rebar_corner_3_1',
        'cs_rebar_corner_4_1',
        'cs_rebar_corner_1_2',
        'cs_rebar_corner_2_2',
        'cs_rebar_corner_3_2',
        'cs_rebar_corner_4_2',
    ];

    var initLayout = function(){

        // Init starting section
        CS_LAYOUT.initSectioninputs(layout_container.init_sec);
        CS_LAYOUT.initShoeTypes(layout_container.init_shoe, false);
        CS_LAYOUT.initBoltDims(layout_container.init_bolt);
        CS_LAYOUT.initRebarDiams();
        CS_LAYOUT.initSecDefaultData(layout_container.init_sec);

        if (layout_container.layout_saved){
            for (var i in layout_container.data) {
                if (radio_arr.indexOf(i) != -1) document.getElementById(i).checked = layout_container.data[i];
                else jQuery('#' + i).val(layout_container.data[i]);
            };
        }; 
        CS_LAYOUT_JSX.initRebarDraw();
    };




    // Table data init --------------------------------------------------------------
    var table_data = {
        cs_load_anchor: [],
        cs_load_grouting_ULS: [],
        cs_load_column_ULS: [],
        cs_load_grouting_SLS: [],
        cs_load_column_SLS: []
    };

    var table_changes = {
        cs_load_anchor: false,
        cs_load_grouting_ULS: false,
        cs_load_column_ULS: false,
        cs_load_grouting_SLS: false,
        cs_load_column_SLS: false
    };

    var tables_init = {
        cs_load_anchor: false,
        cs_load_grouting_ULS: false,
        cs_load_column_ULS: false,
        cs_load_grouting_SLS: false,
        cs_load_column_SLS: false
    };

    var updateTableData = function(){
        for (var i in table_changes) {
            var table_id = table_changes[i];
            if (table_id){
                table_data[i] = tables_init[i].getData();
            };
        };
    };

    var initTableData = function () {

        var loads_anchor = document.getElementById("cs_load_anchor");
        var loads_grouting_ULS = document.getElementById("cs_load_grouting_ULS");
        var loads_column_ULS = document.getElementById("cs_load_column_ULS");
        var loads_grouting_SLS = document.getElementById("cs_load_grouting_SLS");
        var loads_column_SLS = document.getElementById("cs_load_column_SLS");

        var loads_before_settings = [];

        for (var i in table_changes) {
            loads_before_settings.push({
                colHeaders: ['N<sub>Ed</sub> (kN)', 'M<sub>Edx</sub> (kN-m)', 'M<sub>Edy</sub> (kN-m)', 'V<sub>Edx</sub> (kN)', 'V<sub>Edy</sub> (kN)', 'Notes'],
                data: (table_changes[i]) ? table_data[i]: [[],[],[],[],[]],
                rowHeaders: true,
                maxCols: 6,
                startRows: 5,
                minSpareRows: 1,
                height: 160,
                stretchH: 'all',
                columns: [
                    { type: 'numeric', format: '0.00' },
                    { type: 'numeric', format: '0.00' },
                    { type: 'numeric', format: '0.00' },
                    { type: 'numeric', format: '0.00' },
                    { type: 'numeric', format: '0.00' },
                    { type: 'text', }
                ],
            });
        };
        tables_init.cs_load_anchor = new Handsontable(loads_anchor, loads_before_settings[0]);
        tables_init.cs_load_grouting_ULS = new Handsontable(loads_grouting_ULS, loads_before_settings[1]);
        tables_init.cs_load_column_ULS = new Handsontable(loads_column_ULS, loads_before_settings[2]);
        tables_init.cs_load_grouting_SLS = new Handsontable(loads_grouting_SLS, loads_before_settings[3]);
        tables_init.cs_load_column_SLS = new Handsontable(loads_column_SLS, loads_before_settings[4]);
    };

    return {
        details_container: details_container,
        factors_container: factors_container,
        layout_container: layout_container,
        initTableData: initTableData,
        table_changes: table_changes,
        table_data: table_data,
        tables_init: tables_init,
        updateTableData: updateTableData,
        initDetails: initDetails,
        initFactors: initFactors,
        initLayout: initLayout,
    };

})();


