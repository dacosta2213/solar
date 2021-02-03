# Copyright (c) 2020, KIRE INFORMATICA and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

#class Quotation(Document):
#	def solar(self):
		# frappe.throw('Desarrollo en proceso')
#		crear_ingenieria(self)

#@frappe.whitelist()
#def total_proyectado():
#	cotizador = frappe.db.get_list('Cotizador',fields=['name'])

#	for c in cotizador:
#		tarifas = frappe.db.get_list('tarifa', filters={ 'parent': c.name,'idx':['=', '1'] },
#	    fields=['idx', 'parent','precio'],
#	    order_by='posting_date asc',
#	    page_length=1,
#	    if facturas:
#			row = tarifas[0][1][2]
#		    frappe.errprint(c.name, tarifas[0][1][2])
#	return
