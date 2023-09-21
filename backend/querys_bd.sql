-- Tabla de Factura de Venta
CREATE TABLE sales_invoice (
    invoice_id SERIAL PRIMARY KEY,
    invoice_number VARCHAR(255),
    issue_date DATE,
    customer_id INTEGER,
    quantity INTEGER,
    subtotal NUMERIC(12, 2),
    discounts NUMERIC(12, 2),
    taxes NUMERIC(12, 2),
    total NUMERIC(12, 2),
    payment_method VARCHAR(100),
    payment_status VARCHAR(50),
    currency VARCHAR(10),
    exchange_rate NUMERIC(10, 4),
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

CREATE TABLE invoice_item (
    invoice_item_id SERIAL PRIMARY KEY,
    invoice_id SERIAL,
    product_id INTEGER
    FOREIGN KEY (invoice_id) REFERENCES sales_invoice(invoice_id),
    FOREIGN KEY (product_id) REFERENCES product(product_id)
);

-- Tabla de Ingresos
CREATE TABLE income (
    income_id SERIAL PRIMARY KEY,
    income_date DATE,
    invoice_id SERIAL,
    income_source VARCHAR(255), --invoice_number
    amount NUMERIC(12, 2),
    description TEXT,
    payment_method VARCHAR(100),
    income_status VARCHAR(50),
    currency VARCHAR(10),
    exchange_rate NUMERIC(10, 4),
    income_category VARCHAR(100),
    FOREIGN KEY (invoice_id) REFERENCES sales_invoice(invoice_id)
);

-- Tabla de Comprobante de Egresos
CREATE TABLE expense_receipt (
    receipt_id SERIAL PRIMARY KEY,
    receipt_number VARCHAR(255),
    issue_date DATE,
    expense_category VARCHAR(100),
    amount NUMERIC(12, 2),
    payment_method VARCHAR(100),
    payment_status VARCHAR(50),
    currency VARCHAR(10),
    exchange_rate NUMERIC(10, 4)
);

-- Tabla de Costos
CREATE TABLE costs (
    cost_id SERIAL PRIMARY KEY,
    cost_date DATE,
    cost_category VARCHAR(100),
    amount NUMERIC(12, 2),
    description TEXT
);

-- Tabla de Gastos
CREATE TABLE expenses (
    expense_id SERIAL PRIMARY KEY,
    center_id SERIAL, 
    expense_date DATE,
    expense_category VARCHAR(100),
    amount NUMERIC(12, 2),
    description TEXT,
    FOREIGN KEY (center_id) REFERENCES cost_centers(center_id)
);


-- Tabla de Cuentas Contables
CREATE TABLE accounting_accounts (
    account_id SERIAL PRIMARY KEY,
    account_name VARCHAR(255),
    account_type VARCHAR(50),
    amount NUMERIC(12,2)
);


-- Tabla de Movimientos
CREATE TABLE transactions (
    transaction_id SERIAL PRIMARY KEY,
    transaction_date DATE,
    description TEXT,
    amount NUMERIC(12, 2),
    
);

-- Tabla de Centro de Costos
CREATE TABLE cost_centers (
    center_id SERIAL PRIMARY KEY,
    center_name VARCHAR(255),
    description TEXT
);

-- Tabla de Responsable
CREATE TABLE responsibles (
    responsible_id SERIAL PRIMARY KEY,
    responsible_name VARCHAR(255),
    contact_info TEXT
);

-- Tabla de Activos
CREATE TABLE assets (
    asset_id SERIAL PRIMARY KEY,
    asset_name VARCHAR(255),
    purchase_date DATE,
    purchase_price NUMERIC(12, 2),
    description TEXT
);

-- Tabla de Pasivos
CREATE TABLE liabilities (
    liability_id SERIAL PRIMARY KEY,
    liability_name VARCHAR(255),
    due_date DATE,
    amount NUMERIC(12, 2),
    description TEXT
);

-- Tabla de Patrimonio
CREATE TABLE patrimony (
    assets_id SERIAL PRIMARY KEY,
    assets_name VARCHAR(255),
    amount NUMERIC(12, 2),
    description TEXT
);
-- Tabla de clientes
CREATE TABLE customers (
    customer_id INTEGER PRIMARY KEY,
    name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(50),
    phone_number NUMERIC,
    adress VARCHAR(200)
);

-- Tabla de productos
CREATE TABLE  products (
    product_id INTEGER PRIMARY KEY,
    product_name VARCHAR(50),
    product_price  NUMERIC(12, 2)
);
