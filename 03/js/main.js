document.addEventListener('DOMContentLoaded', () => {
    const engine = new ArcEngine('arc-preview');
    
    // UI Elements
    const textInput = document.getElementById('text-input');
    const radiusSlider = document.getElementById('radius-slider');
    const spacingSlider = document.getElementById('spacing-slider');
    const directionSelect = document.getElementById('direction-select');
    const fontSizeSlider = document.getElementById('font-size-slider');
    const themeToggle = document.getElementById('theme-toggle');
    const publishBtn = document.getElementById('publish-btn');

    // State
    let currentState = {
        text: textInput.value,
        radius: parseInt(radiusSlider.value),
        spacing: parseInt(spacingSlider.value),
        direction: parseInt(directionSelect.value),
        fontSize: parseInt(fontSizeSlider.value),
        theme: localStorage.getItem('theme') || 'light'
    };

    // Initialize Theme
    document.body.setAttribute('data-theme', currentState.theme);

    // Update Function
    function updatePreview() {
        engine.render(currentState.text, {
            radius: currentState.radius,
            spacing: currentState.spacing,
            direction: currentState.direction,
            fontSize: currentState.fontSize
        });
    }

    // Event Listeners
    textInput.addEventListener('input', (e) => {
        currentState.text = e.target.value;
        updatePreview();
    });

    radiusSlider.addEventListener('input', (e) => {
        currentState.radius = parseInt(e.target.value);
        updatePreview();
    });

    spacingSlider.addEventListener('input', (e) => {
        currentState.spacing = parseInt(e.target.value);
        updatePreview();
    });

    directionSelect.addEventListener('change', (e) => {
        currentState.direction = parseInt(e.target.value);
        updatePreview();
    });

    fontSizeSlider.addEventListener('input', (e) => {
        currentState.fontSize = parseInt(e.target.value);
        updatePreview();
    });

    themeToggle.addEventListener('click', () => {
        currentState.theme = currentState.theme === 'light' ? 'dark' : 'light';
        document.body.setAttribute('data-theme', currentState.theme);
        localStorage.setItem('theme', currentState.theme);
    });

    publishBtn.addEventListener('click', () => {
        if (!currentState.text.trim()) {
            alert('텍스트를 입력해 주세요!');
            return;
        }

        const post = Storage.savePost({
            title: currentState.text,
            config: { ...currentState }
        });

        alert('커뮤니티에 게시되었습니다!');
        window.location.href = 'community.html';
    });

    // Initial Render
    updatePreview();
});
