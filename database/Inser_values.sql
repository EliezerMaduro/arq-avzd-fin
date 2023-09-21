-- Insertar datos en la tabla de Factura de Venta
INSERT INTO sales_invoice (invoice_id, invoice_number, issue_date, customer_id, quantity, subtotal, discounts, taxes, total, payment_method, payment_status, currency, exchange_rate)
VALUES
    (1, 'INV-2023-001', '2023-09-20', 1, 3, 29.97, 0.00, 5.39, 35.36, 'Tarjeta de crédito', 'Pagado', 'USD', 1.0000),
    (2, 'INV-2023-002', '2023-09-21', 2, 2, 31.98, 2.00, 5.76, 35.74, 'Efectivo', 'Pendiente', 'USD', 1.0000);

-- Insertar datos en la tabla de invoice_item (Detalles de factura)
INSERT INTO invoice_item (invoice_item_id, invoice_id, product_id)
VALUES
    (1, 1, 1),
    (2, 1, 2),
    (3, 2, 1);

-- Insertar datos en la tabla de Ingresos
INSERT INTO income (income_id, income_date, invoice_id, income_source, amount, description, payment_method, income_status, currency, exchange_rate, income_category)
VALUES
    (1, '2023-09-20', 1, 'INV-2023-001', 35.36, 'Ingreso por venta de productos', 'Tarjeta de crédito', 'Cobrado', 'USD', 1.0000, 'Ventas'),
    (2, '2023-09-22', 2, 'INV-2023-002', 0.00, 'Pago pendiente de factura', 'Efectivo', 'Pendiente', 'USD', 1.0000, 'Cuentas por cobrar');

-- Insertar datos en la tabla de Comprobante de Egresos
INSERT INTO expense_receipt (receipt_id, receipt_number, issue_date, expense_category, amount, payment_method, payment_status, currency, exchange_rate)
VALUES
    (1, 'REC-2023-001', '2023-09-20', 'Suministros de Oficina', 50.00, 'Tarjeta de crédito', 'Pagado', 'USD', 1.0000),
    (2, 'REC-2023-002', '2023-09-21', 'Alquiler de Oficina', 1000.00, 'Transferencia bancaria', 'Pagado', 'USD', 1.0000);

-- Insertar datos en la tabla de Costos
INSERT INTO costs (cost_id, cost_date, cost_category, amount, description)
VALUES
    (1, '2023-09-20', 'Materiales de Producción', 200.00, 'Compra de materias primas'),
    (2, '2023-09-22', 'Servicios Profesionales', 500.00, 'Honorarios legales');

-- Insertar datos en la tabla de Gastos
INSERT INTO expenses (expense_id, center_id, expense_date, expense_category, amount, description)
VALUES
    (1, 1, '2023-09-20', 'Suministros de Oficina', 50.00, 'Compra de suministros para la oficina'),
    (2, 2, '2023-09-22', 'Alquiler de Oficina', 1000.00, 'Pago mensual de alquiler');

-- Insertar datos en la tabla de Accounting Accounts
INSERT INTO accounting_accounts (account_id, account_name, account_type, amount)
VALUES
    (1, 'Cuenta de Activos', 'Activo', 10000.00),
    (2, 'Cuenta de Pasivos', 'Pasivo', 5000.00),
    (3, 'Cuenta de Patrimonio', 'Patrimonio', 3000.00);

-- Insertar datos en la tabla de Movimientos
INSERT INTO transactions (transaction_id, transaction_date, description, amount)
VALUES
    (1, '2023-09-20', 'Compra de suministros', -200.00),
    (2, '2023-09-21', 'Venta de productos', 1000.00);

-- Insertar datos en la tabla de Centro de Costos
INSERT INTO cost_centers (center_id, center_name, description)
VALUES
    (1, 'Centro de Costo A', 'Descripción del Centro de Costo A'),
    (2, 'Centro de Costo B', 'Descripción del Centro de Costo B');

-- Insertar datos en la tabla de Responsable
INSERT INTO responsibles (responsible_id, responsible_name, contact_info)
VALUES
    (1, 'Juan Pérez', 'Correo: juan@example.com, Teléfono: 1234567890'),
    (2, 'Ana Gómez', 'Correo: ana@example.com, Teléfono: 9876543210');

-- Insertar datos en la tabla de Activos
INSERT INTO assets (asset_id, asset_name, purchase_date, purchase_price, description)
VALUES
    (1, 'Computadora', '2023-09-15', 1200.00, 'Computadora de escritorio'),
    (2, 'Vehículo', '2023-09-18', 15000.00, 'Automóvil para la empresa');

-- Insertar datos en la tabla de Pasivos
INSERT INTO liabilities (liability_id, liability_name, due_date, amount, description)
VALUES
    (1, 'Préstamo Bancario', '2023-10-01', 5000.00, 'Préstamo para capital de trabajo'),
    (2, 'Facturas por Pagar', '2023-09-30', 2000.00, 'Facturas pendientes de pago');

-- Insertar datos en la tabla de Patrimonio
INSERT INTO patrimony (assets_id, assets_name, amount, description)
VALUES
    (1, 'Capital Inicial', 10000.00, 'Inversión inicial de los socios'),
    (2, 'Utilidades Acumuladas', 2500.00, 'Ganancias acumuladas');

-- Insertar datos en la tabla de clientes
INSERT INTO customers (customer_id, name, last_name, email, phone_number, adress)
VALUES
    (1, 'Juan', 'Perez', 'juan@example.com', 1234567890, '123 Main St'),
    (2, 'Ana', 'Gomez', 'ana@example.com', 9876543210, '456 Elm St');

-- Insertar datos en la tabla de productos
INSERT INTO products (product_id, product_name, product_price)
VALUES
    (1, 'Producto 1', 10.99),
    (2, 'Producto 2', 15.99);
