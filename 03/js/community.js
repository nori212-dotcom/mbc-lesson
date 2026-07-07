document.addEventListener('DOMContentLoaded', () => {
    const feedGrid = document.getElementById('feed-grid');
    const posts = Storage.getPosts();

    if (posts.length === 0) {
        feedGrid.innerHTML = '<p style="padding: 32px; opacity: 0.5;">아직 게시된 디자인이 없습니다. 첫 번째 디자인을 만들어 보세요!</p>';
        return;
    }

    posts.forEach(post => {
        const card = document.createElement('div');
        card.className = 'post-card';
        card.innerHTML = `
            <div class="post-preview" id="preview-${post.id}"></div>
            <div class="post-info">
                <div class="post-title">${post.title}</div>
                <div class="post-meta">
                    ${new Date(post.createdAt).toLocaleDateString()} · 댓글 ${post.comments.length}개
                </div>
            </div>
        `;

        card.addEventListener('click', () => {
            window.location.href = `detail.html?id=${post.id}`;
        });

        feedGrid.appendChild(card);

        // 카드 내 미니 프리뷰 렌더링
        const miniEngine = new ArcEngine(`preview-${post.id}`);
        miniEngine.render(post.config.text, {
            ...post.config,
            fontSize: 16, // 미니 프리뷰용 작은 폰트
            radius: post.config.radius * 0.4 // 미니 프리뷰용 작은 곡률
        });
    });
});
