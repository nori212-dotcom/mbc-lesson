/**
 * UI: Action Sheet 및 범용 UI 컴포넌트 제어
 */
const UI = {
    openActionSheet(options = {}) {
        const { title = '옵션 선택', description = '원하시는 작업을 선택해 주세요.', actions = [] } = options;
        
        let backdrop = document.getElementById('action-sheet-backdrop');
        if (!backdrop) {
            backdrop = this.createActionSheet();
        }

        const titleEl = backdrop.querySelector('.action-sheet-title');
        const descEl = backdrop.querySelector('.action-sheet-description');
        const groupEl = backdrop.querySelector('.action-group');

        titleEl.textContent = title;
        descEl.textContent = description;
        groupEl.innerHTML = '';

        actions.forEach(action => {
            const btn = document.createElement('button');
            btn.className = `action-item ${action.type || ''}`;
            btn.textContent = action.label;
            btn.onclick = () => {
                if (action.onClick) action.onClick();
                this.closeActionSheet();
            };
            groupEl.appendChild(btn);
        });

        backdrop.style.display = 'flex';
        setTimeout(() => backdrop.classList.add('show'), 10);
    },

    closeActionSheet() {
        const backdrop = document.getElementById('action-sheet-backdrop');
        if (backdrop) {
            backdrop.classList.remove('show');
            setTimeout(() => backdrop.style.display = 'none', 300);
        }
    },

    createActionSheet() {
        const html = `
            <div id="action-sheet-backdrop" class="action-sheet-backdrop">
                <div class="action-sheet">
                    <div class="action-sheet-header">
                        <div class="action-sheet-title"></div>
                        <div class="action-sheet-description"></div>
                    </div>
                    <div class="action-group"></div>
                    <button class="action-item cancel">취소</button>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', html);
        const backdrop = document.getElementById('action-sheet-backdrop');
        backdrop.querySelector('.cancel').onclick = () => this.closeActionSheet();
        backdrop.onclick = (e) => {
            if (e.target === backdrop) this.closeActionSheet();
        };
        return backdrop;
    }
};

window.UI = UI;
