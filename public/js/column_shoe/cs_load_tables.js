

// Table - deck node coordinates --------------------------------------------------------------------------------------------------------------------
var loads_anchor = document.getElementById("cs_load_anchor");
var loads_grouting = document.getElementById("cs_load_grouting");
var loads_column = document.getElementById("cs_load_column");
var loads_before_settings = {
    colHeaders: ['N<sub>Ed</sub> (kN)', 'M<sub>Edx</sub> (kN-m)', 'M<sub>Edy</sub> (kN-m)', 'V<sub>Edx</sub> (kN)', 'V<sub>Edy</sub> (kN)', 'Notes'],
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
    ]
};
var cs_anchor = new Handsontable(loads_anchor, loads_before_settings);
var cs_grouting = new Handsontable(loads_grouting, loads_before_settings);
var cs_column = new Handsontable(loads_column, loads_before_settings);


jQuery("#cs_refresh_view").unbind().click(function () {
    var cs_anchor = new Handsontable(loads_anchor, loads_before_settings);
    var cs_grouting = new Handsontable(loads_grouting, loads_before_settings);
    var cs_column = new Handsontable(loads_column, loads_before_settings);
});