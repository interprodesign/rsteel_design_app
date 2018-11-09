CS_ANALYSIS_DATA = (function(){

    var data = {
        name:'',
        surname: '',
        organization: '',
        adress: '',
        phone: '',
        email: '',
        project_name: '',
        project_id: '',
        project_location: '',
        notes: '',

        cs_sect_type:'',
        cs_rect_h:'',
        cs_rect_b:'',
        cs_diam_D:'',
        cs_grt_concrete_type: '',
        cs_grouting_bg: '',
        cs_grouting_tg: '',
        cs_base_tp: '',
        cs_shoe_type: '',
        cs_bolt_type: '',
        cs_bolt_dim: '',

        cs_round_mat_rebar: '',
        cs_rect_mat_rebar: '',

        bolt_pos : [],
        rebar_pos : [],
        
    };


    var collectData = function (){

        for (var i in CS_MENU_DATA.details_container) this.data[i] = CS_MENU_DATA.details_container[i]
        this.data.bolt_pos = CS_LAYOUT_JSX.updated_bolt_coord;
        this.data.rebar_pos = CS_LAYOUT_JSX.updated_rebar_coord;

    };


    return {
        data:data,
        collectData: collectData
    }


})();