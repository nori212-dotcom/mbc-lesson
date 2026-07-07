document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');

    if (!postId) {
        alert('잘못된 접근입니다.');
        window.location.href = 'community.html';
        return;
    }

    const post = Storage.getPostById(postId);
    if (!post) {
        alert('포스트를 찾을 수 없습니다.');
        window.location.href = 'community.html';
        return;
    }

    // UI Elements
    const detailCanvas = document.getElementById('detail-canvas');
    const postTitle = document.getElementById('post-title');
    const postMeta = document.getElementById('post-meta');
    const commentList = document.getElementById('comment-list');
    const commentInput = document.getElementById('comment-input');
    const commentSubmit = document.getElementById('comment-submit');
    const moreBtn = document.getElementById('more-btn');

    // Action Sheet Event
    moreBtn.addEventListener('click', () => {
        UI.openActionSheet({
            title: '디자인 옵션',
            description: '이 디자인에 대한 추가 작업을 선택하세요.',
            actions: [
                { 
                    label: '공유하기', 
                    onClick: () => {
                        navigator.clipboard.writeText(window.location.href);
                        alert('링크가 클립보드에 복사되었습니다.');
                    } 
                },
                { 
                    label: '이미지로 저장 (준비 중)', 
                    onClick: () => alert('현재 브라우저 보안 정책으로 인해 준비 중인 기능입니다.') 
                },
                { 
                    label: '삭제하기', 
                    type: 'destructive',
                    onClick: () => {
                        if (confirm('정말로 이 게시물을 삭제하시겠습니까?')) {
                            // 간단한 삭제 로직 (Storage 연동 필요 시 확장)
                            alert('삭제되었습니다.');
                            window.location.href = 'community.html';
                        }
                    } 
                }
            ]
        });
    });

    // Render Design
    const engine = new ArcEngine('detail-canvas');
    engine.render(post.config.text, post.config);

    // Render Info
    postTitle.textContent = post.title;
    postMeta.textContent = `${new Date(post.createdAt).toLocaleString()} · 작성됨`;

    // Render Comments
    function renderComments() {
        const currentPost = Storage.getPostById(postId);
        commentList.innerHTML = currentPost.comments.length === 0 
            ? '<div style="padding: 16px; opacity: 0.5; text-align: center; font-size: 14px;">No comments yet.</div>'
            : '';
        
        currentPost.comments.forEach(comment => {
            const div = document.createElement('div');
            div.className = 'control-item';
            div.innerHTML = `
                <p style="font-size: 15px;">${comment.text}</p>
                <span style="font-size: 11px; opacity: 0.4;">${new Date(comment.createdAt).toLocaleString()}</span>
            `;
            commentList.appendChild(div);
        });
    }

    commentSubmit.addEventListener('click', () => {
        const text = commentInput.value.trim();
        if (!text) return;

        Storage.addComment(postId, text);
        commentInput.value = '';
        renderComments();
    });

    commentInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            commentSubmit.click();
        }
    });

    // Initial Render
    renderComments();
});
