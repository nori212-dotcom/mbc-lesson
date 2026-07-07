/**
 * ArcEngine: 순수 자바스크립트로 텍스트 곡선 렌더링을 처리하는 엔진
 */
class ArcEngine {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
    }

    /**
     * @param {string} text - 렌더링할 텍스트
     * @param {object} options - 곡률 옵션 (radius, spacing, direction 등)
     */
    render(text, options = {}) {
        if (!this.container) return;

        const {
            radius = 200,
            spacing = 5,
            direction = 1, // 1: 위로 볼록, -1: 아래로 볼록
            fontSize = 32,
            fontWeight = 'bold',
            fontFamily = 'inherit',
            color = 'currentColor'
        } = options;

        this.container.innerHTML = '';
        const chars = text.split('');
        const totalChars = chars.length;
        
        // 각도 계산 (가운데를 기준으로 대칭 배치)
        const totalAngle = (totalChars - 1) * spacing;
        const startAngle = -totalAngle / 2;

        chars.forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char; // 공백 처리
            span.style.position = 'absolute';
            span.style.fontSize = `${fontSize}px`;
            span.style.fontWeight = fontWeight;
            span.style.fontFamily = fontFamily;
            span.style.color = color;
            span.style.display = 'inline-block';
            span.style.transition = 'all 0.1s ease-out';
            span.style.transformOrigin = 'center bottom';

            const currentAngle = startAngle + (index * spacing);
            const radian = (currentAngle * Math.PI) / 180;

            // 삼각함수 좌표 계산
            // x = R * sin(theta)
            // y = R * (1 - cos(theta)) * direction
            const x = radius * Math.sin(radian);
            const y = radius * (1 - Math.cos(radian)) * direction;

            // 회전 적용
            const rotation = currentAngle * direction;
            span.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg)`;

            this.container.appendChild(span);
        });
    }
}

window.ArcEngine = ArcEngine;
