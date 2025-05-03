// بيانات المخالفات
const violations = [
    { id: 1, description: "مخالفة مرورية", amount: 100, paid: false },
    { id: 2, description: "مخالفة مالية", amount: 500, paid: true },
    // أضف المزيد من المخالفات هنا
];

// بيانات العملات
const currencies = [
    { serialNumber: "143-36272", amount: 1, owner: "أحمد" },
    { serialNumber: "143-32136", amount: 1, owner: "سعيد" },
    { serialNumber: "143-74782", amount: 5, owner: "علي" },
    // أضف المزيد من العملات هنا
];

// بيانات العملاء
const customers = [
    { name: "أحمد", id: 1, violations: [1] },
    { name: "سعيد", id: 2, violations: [2] },
    // أضف المزيد من العملاء هنا
];

// دالة البحث عن المخالفات
function searchViolation() {
    const query = document.getElementById('violationSearch').value.toLowerCase();
    const filteredViolations = violations.filter(v => v.description.toLowerCase().includes(query));

    document.getElementById('violationResults').innerHTML = filteredViolations.map(v =>
        `<p>المخالفة: ${v.description}, المبلغ: ${v.amount}, مدفوعة: ${v.paid}</p>`
    ).join('');
}

// دالة البحث عن العملات
function searchCurrency() {
    const query = document.getElementById('currencySearch').value.toLowerCase();
    const filteredCurrencies = currencies.filter(c => c.serialNumber.toLowerCase().includes(query));

    document.getElementById('currencyResults').innerHTML = filteredCurrencies.map(c =>
        `<p>رقم العملة: ${c.serialNumber}, المبلغ: ${c.amount}, المالك: ${c.owner}</p>`
    ).join('');
}

// دالة البحث عن العملاء
function searchCustomer() {
    const query = document.getElementById('customerSearch').value.toLowerCase();
    const filteredCustomers = customers.filter(c => c.name.toLowerCase().includes(query));

    document.getElementById('customerResults').innerHTML = filteredCustomers.map(c =>
        `<p>العميل: ${c.name}, معرف العميل: ${c.id}</p>`
    ).join('');
}

// دالة إضافة عميل جديد
function addCustomer() {
    const customerName = document.getElementById('customerName').value;

    if (customerName) {
        const newId = customers.length + 1;
        customers.push({ name: customerName, id: newId, violations: [] });

        alert(`تم إضافة العميل: ${customerName} بنجاح.`);
        document.getElementById('customerName').value = ''; 
        searchCustomer();
    } else {
        alert("الرجاء إدخال اسم العميل.");
    }
}

// دالة إضافة مخالفة جديدة
function addViolation() {
    const description = document.getElementById('violationDescription').value;
    const amount = parseFloat(document.getElementById('violationAmount').value);
    const paid = document.getElementById('violationPaid').value === 'true';

    if (description && amount && !isNaN(amount)) {
        const newId = violations.length + 1;
        violations.push({ id: newId, description, amount, paid });

        alert(`تم إضافة المخالفة: ${description} بنجاح.`);
        document.getElementById('violationDescription').value = '';
        document.getElementById('violationAmount').value = '';
        document.getElementById('violationPaid').value = 'false';

        searchViolation();
    } else {
        alert("الرجاء إدخال جميع البيانات بشكل صحيح.");
    }
}

// دالة تغيير مالك العملة
function changeOwner() {
    const serialNumber = document.getElementById('serialNumber').value;
    const newOwner = document.getElementById('newOwner').value;

    const currency = currencies.find(c => c.serialNumber === serialNumber);
    if (currency) {
        currency.owner = newOwner;
        alert(`تم تغيير المالك للعملة ${serialNumber} إلى ${newOwner}.`);
    } else {
        alert("العملة غير موجودة.");
    }
}
