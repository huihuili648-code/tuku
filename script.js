document.addEventListener('DOMContentLoaded', () => {
    const galleryContainer = document.getElementById('photo-gallery');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close-btn');

    fetch('image_list.json')
        .then(response => {
            if (!response.ok) {
                return fetch('/tuku/image_list.json');
            }
            return response.json();
        })
        .then(imagePaths => {
            if (!imagePaths || imagePaths.length === 0) {
                galleryContainer.innerHTML = '<p class="no-images">抱歉，目前没有图片可供展示。</p>';
                return;
            }

            imagePaths.forEach(path => {
                const item = document.createElement('div');
                item.className = 'gallery-item';

                const img = document.createElement('img');
                img.src = `images/${path}`;
                img.alt = `分享图库 - ${path}`;
                img.loading = 'lazy';

                item.appendChild(img);
                galleryContainer.appendChild(item);

                img.addEventListener('click', () => {
                    lightbox.classList.add('active');
                    lightboxImg.src = `images/${path}`;
                });
            });
        })
        .catch(error => {
            console.error('获取图片列表失败:', error);
            galleryContainer.innerHTML = '<p class="error-message">加载图片失败，请检查网络或稍后重试。</p>';
        });

    closeBtn.addEventListener('click', () => {
        lightbox.classList.remove('active');
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
                    lightbox.classList.remove('active');
                }
            });

            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && lightbox.classList.contains('active')) {
                    lightbox.classList.remove('active');
                }
            });
        });