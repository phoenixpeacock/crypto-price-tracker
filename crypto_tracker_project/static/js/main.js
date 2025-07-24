// JavaScript placeholder
document.addEventListener('DOMContentLoaded', function() {
    const refreshBtn = document.getElementById('refreshBtn');

    if (refreshBtn) {
        refreshBtn.addEventListener('click', function() {
            const cryptoId = this.getAttribute('data-crypto-id');
            refreshPrice(cryptoId);
        });
    }

    function refreshPrice(cryptoId) {
        const refreshBtn = document.getElementById('refreshBtn');
        const originalText = refreshBtn.innerHTML;

        // Show loading state
        refreshBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-1"></i>Loading...';
        refreshBtn.disabled = true;

        // Get CSRF token
        const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]').value;

        fetch(`/api/refresh/${cryptoId}/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrfToken,
            },
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Update the price display
                document.getElementById('currentPrice').textContent = `$${parseFloat(data.data.price).toFixed(8)}`;

                // Update price change
                const priceChangeElement = document.getElementById('priceChange');
                const priceChange = parseFloat(data.data.price_change_24h);
                priceChangeElement.textContent = `${priceChange.toFixed(2)}%`;
                priceChangeElement.className = priceChange >= 0 ? 'text-success' : 'text-danger';

                // Update market cap
                const marketCapElement = document.getElementById('marketCap');
                if (data.data.market_cap) {
                    marketCapElement.textContent = `${parseInt(data.data.market_cap).toLocaleString()}`;
                }

                // Update volume
                const volumeElement = document.getElementById('volume24h');
                if (data.data.volume_24h) {
                    volumeElement.textContent = `${parseInt(data.data.volume_24h).toLocaleString()}`;
                }

                // Show success message
                showAlert('Price updated successfully!', 'success');
            } else {
                showAlert('Failed to update price. Please try again.', 'danger');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            showAlert('An error occurred while updating the price.', 'danger');
        })
        .finally(() => {
            // Reset button state
            refreshBtn.innerHTML = originalText;
            refreshBtn.disabled = false;
        });
    }

    function showAlert(message, type) {
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert alert-${type} alert-dismissible fade show`;
        alertDiv.innerHTML = `
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        `;

        const container = document.querySelector('.container');
        container.insertBefore(alertDiv, container.firstChild);

        // Auto dismiss after 3 seconds
        setTimeout(() => {
            alertDiv.remove();
        }, 3000);
    }
});