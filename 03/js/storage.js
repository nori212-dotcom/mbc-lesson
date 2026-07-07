/**
 * Storage: LocalStorage를 사용하여 포스트 데이터를 관리하는 모듈
 */
const Storage = {
    KEY: 'arc_posts',

    // 모든 포스트 가져오기
    getPosts() {
        const data = localStorage.getItem(this.KEY);
        return data ? JSON.parse(data) : [];
    },

    // 포스트 저장하기
    savePost(postData) {
        const posts = this.getPosts();
        const newPost = {
            id: Date.now().toString(),
            createdAt: new Date().toISOString(),
            comments: [],
            ...postData
        };
        posts.unshift(newPost);
        localStorage.setItem(this.KEY, JSON.stringify(posts));
        return newPost;
    },

    // 특정 포스트 가져오기
    getPostById(id) {
        return this.getPosts().find(post => post.id === id);
    },

    // 댓글 추가
    addComment(postId, commentText) {
        const posts = this.getPosts();
        const postIndex = posts.findIndex(p => p.id === postId);
        if (postIndex > -1) {
            posts[postIndex].comments.push({
                id: Date.now().toString(),
                text: commentText,
                createdAt: new Date().toISOString()
            });
            localStorage.setItem(this.KEY, JSON.stringify(posts));
        }
    }
};

window.Storage = Storage;
