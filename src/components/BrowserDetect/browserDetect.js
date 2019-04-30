import browser from 'browser-detect';
import styles from './browserDetect.module.scss';

const checkOldBrowser = () => {
  const browserData = browser();
  const { name, versionNumber } = browserData;
  const browserVersions = {
    chrome: 65,
    firefox: 60,
    safari: 10,
    ie: 11
  };
  const showDownloadModal = !browserVersions[name] || versionNumber < browserVersions[name];
  if (showDownloadModal) {
    const elem = document.createElement('div');
    elem.innerHTML = generateModal();
    document.body.appendChild(elem);
    document.getElementById('hv-close-btn').addEventListener('click', modalClose);
    document.getElementById('not-now').addEventListener('click', modalClose);
  }
};

const modalClose = () => {
  document.getElementById('hv-checkOld-browser').style.display = 'none';
  document.getElementById('hv-close-btn').removeEventListener('click', modalClose);
  document.getElementById('not-now').removeEventListener('click', modalClose);
};

document.addEventListener('DOMContentLoaded', () => {
  checkOldBrowser();
});

function generateModal() {
  return (`
    <div class="${styles['modal-outer-wrap']}" id="hv-checkOld-browser">
      <div class="${styles['modal-inner-wrap']}">
        <div class="${styles['modal-close-btn']}" id="hv-close-btn">
          <img src="images/modal-close.png" />
        </div>
        <h1 class="${styles['modal-heading']}">You are Using a Web Browser not Supported by this Website!</h1>
        <p class="${styles['modal-description']}">
          <span>This means that some functionality may not work as intended.</span>
          <span>This may result in strange behaviors or lost functionality.</span>
          <span>Use or upgrade/install one of the following browsers to take full advantage of the website.</span>
          <span>Thank you!</span>
        </p>
        <div class="${styles['download-btns-group']}">
          <a href="https://www.google.com/chrome/" class="${styles['download-btn-single']}">
            <div class="${styles['download-btn-img']} ${styles['download-btn-chrome']}">
              <span class="${styles['download-arrow']}">
                <img src="images/modal-download-arrow.png" />
              </span>
            </div>
            <p class="${styles['download-btn-text']}">
              Chrome
              <span>Free Download</span>
            </p>
          </a>
          <a href="https://www.mozilla.org/en-US/firefox/new/" class="${styles['download-btn-single']}">
            <div class="${styles['download-btn-img']} ${styles['download-btn-firefox']}">
              <span class="${styles['download-arrow']}">
                <img src="images/modal-download-arrow.png" />
              </span>
            </div>
            <p class="${styles['download-btn-text']}">
              Firefox
              <span>Free Download</span>
            </p>
          </a>
          <a href="https://support.apple.com/downloads/safari" class="${styles['download-btn-single']}">
            <div class="${styles['download-btn-img']} ${styles['download-btn-safari']}">
              <span class="${styles['download-arrow']}">
               <img src="images/modal-download-arrow.png" />
              </span>
            </div>
            <p class="${styles['download-btn-text']}">
              Safari
              <span>Free Download</span>
            </p>
          </a>
        </div>
        <div class="${styles['hv-modal-footer']}">
          <button key="back" class="${styles['btn-link']}" id="not-now">Not now</button>
        </div>
      </div>
    </div>
    `
  );
}
