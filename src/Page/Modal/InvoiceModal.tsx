import React, { useState, ChangeEvent } from 'react';
import inv from '../../Style/Invoice.module.css';

interface LineItem {
  id: string;
  name: string;
  description: string;
  quantity: number;
  unitPrice: number;
  discount: number;
}

const InvoiceModal: React.FC = () => {
  // State for Invoice Metadata
  const [client, setClient] = useState<string>('');
  const [invoiceNumber, setInvoiceNumber] = useState<string>('INV-2026-001');
  const [issueDate, setIssueDate] = useState<string>(
    new Date().toISOString().split('T')[0]
  );
  const [dueDate, setDueDate] = useState<string>('');
  const [currency, setCurrency] = useState<string>('$');
  const [taxRate, setTaxRate] = useState<number>(10);
  const [notes, setNotes] = useState<string>('');
  const [logoPreview, setLogoPreview] = useState<string | null>(null);

  // State for Line Items
  const [items, setItems] = useState<LineItem[]>([
    {
      id: '1',
      name: 'Web Development Service',
      description: 'Frontend component implementation and styling',
      quantity: 1,
      unitPrice: 500,
      discount: 0,
    },
  ]);

  // Handle Logo Upload
  const handleLogoUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Add Item Line
  const handleAddItem = () => {
    setItems((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        name: '',
        description: '',
        quantity: 1,
        unitPrice: 0,
        discount: 0,
      },
    ]);
  };

  // Remove Item Line
  const handleRemoveItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Update Line Item Field
  const handleItemChange = (
    id: string,
    field: keyof LineItem,
    value: string | number
  ) => {
    setItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, [field]: value };
        }
        return item;
      })
    );
  };

  // Calculate Totals
  const subtotal = items.reduce((acc, item) => {
    const itemTotal = item.quantity * item.unitPrice;
    const discountAmount = (itemTotal * item.discount) / 100;
    return acc + (itemTotal - discountAmount);
  }, 0);

  const taxAmount = (subtotal * taxRate) / 100;
  const grandTotal = subtotal + taxAmount;

  return (
    <div className={inv.main}>
      <div className={inv.container}>
        {/* Top Header Bar */}
        <div className={inv.top}>
          <div className={inv.left}>
            <div className={inv.logoIcon}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
            </div>
            <label className={inv.brandTitle}>Smart Billing System</label>
          </div>

          <div className={inv.rightHeader}>
            <button
              type="button"
              className={inv.btnSecondary}
              onClick={() => window.history.back()}
            >
              Back
            </button>
            <button
              type="button"
              className={inv.btnPrimary}
              onClick={() => alert('Invoice Saved Successfully!')}
            >
              Save Invoice
            </button>
          </div>
        </div>

        {/* Invoice Meta Data & Company Logo Upload */}
        <div className={inv.metaGrid}>
          <div className={inv.metaFields}>
            <div className={inv.formGroup}>
              <label>Client Name *</label>
              <input
                type="text"
                placeholder="Select or enter client name"
                value={client}
                onChange={(e) => setClient(e.target.value)}
              />
            </div>

            <div className={inv.rowFields}>
              <div className={inv.formGroup}>
                <label>Invoice Number *</label>
                <input
                  type="text"
                  value={invoiceNumber}
                  onChange={(e) => setInvoiceNumber(e.target.value)}
                />
              </div>

              <div className={inv.formGroup}>
                <label>Issue Date *</label>
                <input
                  type="date"
                  value={issueDate}
                  onChange={(e) => setIssueDate(e.target.value)}
                />
              </div>

              <div className={inv.formGroup}>
                <label>Due Date</label>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                />
              </div>

              <div className={inv.formGroup}>
                <label>Currency</label>
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                >
                  <option value="$">USD ($)</option>
                  <option value="€">EUR (€)</option>
                  <option value="£">GBP (£)</option>
                  <option value="₹">INR (₹)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Logo Upload Box */}
          <div className={inv.right}>
            <label htmlFor="company-logo-input" className={inv.company_logo}>
              {logoPreview ? (
                <img
                  src={logoPreview}
                  alt="Company Logo Preview"
                  className={inv.logoImg}
                />
              ) : (
                <div className={inv.logoPlaceholder}>
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                  <span>Upload Your Company Logo</span>
                  <small>PNG, JPG up to 2MB</small>
                </div>
              )}
            </label>
            <input
              id="company-logo-input"
              type="file"
              accept="image/*"
              className={inv.hiddenInput}
              onChange={handleLogoUpload}
            />
          </div>
        </div>

        {/* Line Items Table */}
        <div className={inv.tableWrapper}>
          <table className={inv.itemTable}>
            <thead>
              <tr>
                <th style={{ width: '40%' }}>Item & Description</th>
                <th style={{ width: '12%' }}>Quantity</th>
                <th style={{ width: '15%' }}>Price ({currency})</th>
                <th style={{ width: '12%' }}>Discount (%)</th>
                <th style={{ width: '15%' }}>Total ({currency})</th>
                <th style={{ width: '6%' }}></th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => {
                const lineTotal =
                  item.quantity * item.unitPrice * (1 - item.discount / 100);
                return (
                  <tr key={item.id}>
                    <td>
                      <input
                        type="text"
                        placeholder="Enter item name"
                        value={item.name}
                        onChange={(e) =>
                          handleItemChange(item.id, 'name', e.target.value)
                        }
                        className={inv.itemNameInput}
                      />
                      <input
                        type="text"
                        placeholder="Enter description (optional)"
                        value={item.description}
                        onChange={(e) =>
                          handleItemChange(
                            item.id,
                            'description',
                            e.target.value
                          )
                        }
                        className={inv.itemDescInput}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) =>
                          handleItemChange(
                            item.id,
                            'quantity',
                            parseFloat(e.target.value) || 0
                          )
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        min="0"
                        step="0.01"
                        value={item.unitPrice}
                        onChange={(e) =>
                          handleItemChange(
                            item.id,
                            'unitPrice',
                            parseFloat(e.target.value) || 0
                          )
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        min="0"
                        max="100"
                        value={item.discount}
                        onChange={(e) =>
                          handleItemChange(
                            item.id,
                            'discount',
                            parseFloat(e.target.value) || 0
                          )
                        }
                      />
                    </td>
                    <td className={inv.totalCell}>
                      {currency}
                      {lineTotal.toFixed(2)}
                    </td>
                    <td>
                      {items.length > 1 && (
                        <button
                          type="button"
                          className={inv.btnDelete}
                          onClick={() => handleRemoveItem(item.id)}
                          title="Remove row"
                        >
                          ✕
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <button
            type="button"
            className={inv.btnAddItem}
            onClick={handleAddItem}
          >
            + Add Item
          </button>
        </div>

        {/* Footer Summary Section */}
        <div className={inv.bottomSection}>
          <div className={inv.notesBox}>
            <label>Add Notes or Terms</label>
            <textarea
              placeholder="Payment terms, bank details, or additional messages..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={4}
            />
          </div>

          <div className={inv.summaryBox}>
            <div className={inv.summaryRow}>
              <span>Subtotal:</span>
              <span>
                {currency}
                {subtotal.toFixed(2)}
              </span>
            </div>

            <div className={inv.summaryRow}>
              <span>
                Tax Rate (%):
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={taxRate}
                  onChange={(e) =>
                    setTaxRate(parseFloat(e.target.value) || 0)
                  }
                  className={inv.taxInput}
                />
              </span>
              <span>
                {currency}
                {taxAmount.toFixed(2)}
              </span>
            </div>

            <div className={`${inv.summaryRow} ${inv.grandTotal}`}>
              <span>Total Amount Due:</span>
              <span>
                {currency}
                {grandTotal.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceModal;