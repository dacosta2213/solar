// Copyright (c) 2020, KIRE INFORMATICA and contributors
// For license information, please see license.txt

//frappe.ui.form.on('Quotation', {
//	ingenieria: function(frm) {
//		frm.call('solar')
//}})

frappe.ui.form.on("Opportunity", {
    refresh: function(frm) {
      frm.add_custom_button(__("Ingenieria"), function() {
            frappe.new_doc("Cotizador", {
							  opportunity: frm.doc.name,
                cotizacion_para: frm.doc.enquiry_from,
                prospecto: frm.doc.lead,
                cliente: frm.doc.customer
            });
        });
    }
});

frappe.ui.form.on("Opportunity Item", {
    precio1: function(frm, cdt, cdn) {
        var d = locals[cdt][cdn];
        frappe.model.set_value(d.doctype, d.name, "total1", d.precio1 * d.qty);
        var total = 0
        frm.doc.items.forEach(function(d) {
        total += d.total1;
        });
    frm.set_value('precio_total1', total);
    refresh_field("precio_total1");
    }
});

frappe.ui.form.on("Opportunity Item", {
    qty: function(frm, cdt, cdn) {
        var d = locals[cdt][cdn];
        frappe.model.set_value(d.doctype, d.name, "total1", d.precio1 * d.qty);
        var total = 0
        frm.doc.items.forEach(function(d) {
        total += d.total1;
        });
    frm.set_value('precio_total1', total);
    refresh_field("precio_total1");
    }
});
