document.getElementById('payment-method').addEventListener('change', function() {
    const bankDetails = document.getElementById('bank-details');
    const cryptoDetails = document.getElementById('crypto-details');

    // Скрываем оба блока
    bankDetails.classList.add('hidden');
    cryptoDetails.classList.add('hidden');

    // Удаляем анимацию
    bankDetails.classList.remove('fade-in');
    cryptoDetails.classList.remove('fade-in');

    if (this.value === 'bank') {
        bankDetails.classList.remove('hidden');
        bankDetails.classList.add('fade-in'); // Добавляем анимацию
    } else if (this.value === 'crypto') {
        cryptoDetails.classList.remove('hidden');
        cryptoDetails.classList.add('fade-in'); // Добавляем анимацию
    }
});

document.getElementById('transaction-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const paymentMethod = document.getElementById('payment-method').value;
    let details;

    if (paymentMethod === 'bank') {
        const bankName = document.getElementById('bank-name').value;
        const accountNumber = document.getElementById('account-number').value;
        details = `Банк: ${bankName}, Номер счета: ${accountNumber}`;
    } else if (paymentMethod === 'crypto') {
        const cryptoWallet = document.getElementById('crypto-wallet').value;
        details = `Криптокошелёк: ${cryptoWallet}`;
    }document.getElementById('transaction-form').addEventListener('submit', function(event) {
        event.preventDefault();
    
        const paymentMethod = document.getElementById('payment-method').value;
        let details;
    
        if (paymentMethod === 'bank') {
            const bankName = document.getElementById('bank-name').value;
            const accountNumber = document.getElementById('account-number').value;
            
            // Валидация банковских данных
            if (!bankName || !accountNumber) {
                alert('Пожалуйста, заполните все поля банковских реквизитов');
                return;
            }
    
            details = `Банк: ${bankName}, Номер счета: ${accountNumber}`;
        } else if (paymentMethod === 'crypto') {
            const cryptoWallet = document.getElementById('crypto-wallet').value;
            
            // Валидация криптокошелька
            if (!cryptoWallet) {
                alert('Пожалуйста, введите адрес криптокошелька');
                return;
            }
    
            details = `Криптокошелёк: ${cryptoWallet}`;
        } else {
            alert('Пожалуйста, выберите способ оплаты');
            return;
        }
    
        // Анимация подтверждения транзакции
        const confirmationModal = document.createElement('div');
        confirmationModal.classList.add('confirmation-modal');
        confirmationModal.innerHTML = `
            <div class="modal-content">
                <h2>Транзакция подтверждена!</h2>
                <p>${details}</p>
                <button id="close-modal">Закрыть</button>
            </div>
        `;
        document.body.appendChild(confirmationModal);
    
        // Анимация модального окна
        setTimeout(() => {
            confirmationModal.classList.add('show');
        }, 50);
    
        // Закрытие модального окна
        document.getElementById('close-modal').addEventListener('click', () => {
            confirmationModal.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(confirmationModal);
            }, 500);
        });
    });
    
    // Добавим эффект печатной машинки для заголовка
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }
    
    // Применяем эффект печатной машинки при загрузке страницы
    window.addEventListener('DOMContentLoaded', () => {
        const titleElement = document.querySelector('h1');
        titleElement.innerHTML = ''; // Очищаем текущий заголовок
        typeWriter(titleElement, 'Платежный Терминал');
    });

    alert(`Транзакция подтверждена! ${details}`);
});