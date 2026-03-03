window.addEventListener('OpusCartChange', (event) => {
  if (!document.querySelector('.opus-extra-image')) {
    document.querySelector('.opus-btn-checkout').insertAdjacentHTML(
      "afterend",
      `
      <div class="opus-extra-image" style="width: 100%; display: flex; justify-content: center;">
        <img src="https://cdn.shopify.com/s/files/1/0843/0000/5708/files/Screenshot_2025-02-17_at_15.02.21-removebg-preview.png?v=1739804033" alt="Extra Image" style="max-width: 320px; height: auto; margin-top: 10px;">
      </div>`
    );
  }
});
