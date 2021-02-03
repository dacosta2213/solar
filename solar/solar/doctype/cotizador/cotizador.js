// Copyright (c) 2020, KireInformaticaand contributors
// For license information, please see license.txt
frappe.ui.form.on("Bimestre", {
    consumo: function(frm, cdt, cdn) {
         d= locals[cdt][cdn];
        frappe.model.set_value(d.doctype, d.name, "consumo", d.consumo * 1);
         total= 0
        frm.doc.bimestre.forEach(function(d) {
        total += d.consumo;
        });
    frm.set_value('consumo_anual', total);
    refresh_field("consumo_anual");
    }
});

frappe.ui.form.on("tarifa", {
    precio: function(frm, cdt, cdn) {
         d= locals[cdt][cdn];
        frappe.model.set_value(d.doctype, d.name, "subtotal", d.precio * d.kwh);
         total= 0
         total2= 0
        frm.doc.tarifa.forEach(function(d) {
        total += d.subtotal;
        total2 += d.kwh;
        });
    frm.set_value('suma_total', total);
    refresh_field("suma_total");
    frm.set_value('total_kwh', total2);
    refresh_field("total_kwh");
    }
});

frappe.ui.form.on("tarifa", {
    kwh: function(frm, cdt, cdn) {
         d= locals[cdt][cdn];
        frappe.model.set_value(d.doctype, d.name, "subtotal", d.precio * d.kwh);
         total= 0
         total2= 0
        frm.doc.tarifa.forEach(function(d) {
        total += d.subtotal;
        total2 += d.kwh;
        });
    frm.set_value('suma_total', total);
    refresh_field("suma_total");
    frm.set_value('total_kwh', total2);
    refresh_field("total_kwh");
    }
});



frappe.ui.form.on('Cotizador', {
	refresh: function(frm) {
		frm.set_value("promedio_diario", frm.doc.consumo_anual / 365);
		frm.set_value("promedio_perdidas", ((((frm.doc.promedio_anual * frm.doc.temperatura) * frm.doc.polvo) * frm.doc.inversor) * frm.doc.cableado));
		frm.set_value("horas_promedio", frm.doc.promedio_perdidas * 1);
		frm.set_value("numero_paneles", ((frm.doc.promedio_diario * 1000) / frm.doc.tipo_panel) / frm.doc.horas_promedio);
		frm.set_value("potencia_instalada", (frm.doc.paneles_instalar * frm.doc.tipo_panel) / 1000);
		frm.set_value("kwh", frm.doc.promedio_perdidas * frm.doc.potencia_instalada);
		frm.set_value("produccion_anual_kwh", frm.doc.kwh * 365);
		frm.set_value("porcentaje_produccion", (frm.doc.produccion_anual_kwh*100) / frm.doc.consumo_anual);
		frm.set_value("produccion_11", (frm.doc.kwh * 0.9) * 365);
		frm.set_value("porcentaje_11", (frm.doc.produccion_11 * 100) / frm.doc.consumo_anual);
		frm.set_value("produccion_26", (frm.doc.kwh * 0.8) * 365);
		frm.set_value("porcentaje_26", (frm.doc.produccion_26 * 100) / frm.doc.consumo_anual);
		frm.set_value("neto_total", frm.doc.suma_total * 1.16);
		frm.set_value("valor_incremento", (frm.doc.suma_total * frm.doc.incremento_anual) / 100);
		frm.set_value("pago_final", frm.doc.suma_total + frm.doc.valor_incremento);
		frm.set_value("precio_kwh_incremento", (frm.doc.pago_final / frm.doc.total_kwh) * 1.16);
		frm.set_value("consumo_anterior", frm.doc.promedio_diario * 61);
		frm.set_value("produccion_bimestral", frm.doc.kwh * 61);
		frm.set_value("total_a_pagar", frm.doc.consumo_anterior - frm.doc.produccion_bimestral);
    frm.set_value("costo_total_a_pagar", (frm.doc.precio_primer_escalon*frm.doc.factor_disminucion)*frm.doc.total_a_pagar);




//Costo Energia//
frm.set_value("costo_energia", frm.doc.precio_kwh_incremento * 1);

//costo anual//
frm.set_value("costo_anual", frm.doc.precio_kwh_incremento * frm.doc.produccion_anual_kwh);

// Costo Acumulado//
frm.set_value("costo_acumulado", frm.doc.costo_anual * 1);

//ahorro//
frm.set_value("ahorro", frm.doc.costo_acumulado - frm.doc.valor_neto1);
	}
});
