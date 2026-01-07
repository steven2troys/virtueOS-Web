/**
 * Shared Navigation Component for virtueOS Archive
 *
 * Include this script in all chapter/interlude HTML files.
 * It will dynamically generate the sidebar navigation with proper
 * relative paths and highlight the current page.
 */

const NAVIGATION_DATA = [
    { num: '01', title: 'Post-Mortem', path: 'chapters/01-post-mortem', type: 'chapter' },
    { num: '02', title: 'Napkin', path: 'chapters/02-napkin', type: 'chapter' },
    { num: 'I-1', title: 'Before the Napkin', path: 'interludes/01-before-the-napkin', type: 'interlude' },
    { num: '03', title: 'First Believer', path: 'chapters/03-first-believer', type: 'chapter' },
    { num: '04', title: 'Pitch Deck', path: 'chapters/04-pitch-deck', type: 'chapter' },
    { num: '05', title: "Skeptic's Report", path: 'chapters/05-skeptics-report', type: 'chapter' },
    { num: '06', title: 'Money Meeting', path: 'chapters/06-money-meeting', type: 'chapter' },
    { num: '07', title: 'Genius Arrives', path: 'chapters/07-genius-arrives', type: 'chapter' },
    { num: 'I-2', title: 'The New Player', path: 'interludes/02-the-new-player', type: 'interlude' },
    { num: '08', title: 'The Advisors', path: 'chapters/08-the-advisors', type: 'chapter' },
    { num: '09', title: 'Architecture', path: 'chapters/09-architecture', type: 'chapter' },
    { num: '10', title: 'First Test', path: 'chapters/10-first-test', type: 'chapter' },
    { num: 'I-3', title: 'The Golden Session', path: 'interludes/03-the-golden-session', type: 'interlude' },
    { num: '11', title: 'Government Letter', path: 'chapters/11-government-letter', type: 'chapter' },
    { num: '12', title: 'First Discrepancy', path: 'chapters/12-first-discrepancy', type: 'chapter' },
    { num: 'I-4', title: 'The Night Before', path: 'interludes/04-the-night-before', type: 'interlude' },
    { num: '13', title: 'Pivot', path: 'chapters/13-pivot', type: 'chapter' },
    { num: '14', title: 'Prototype', path: 'chapters/14-prototype', type: 'chapter' },
    { num: '15', title: 'Schism', path: 'chapters/15-schism', type: 'chapter' },
    { num: '16', title: 'Warning', path: 'chapters/16-warning', type: 'chapter' },
    { num: '17', title: 'Demonstration', path: 'chapters/17-demonstration', type: 'chapter' },
    { num: '18', title: 'Sabotage', path: 'chapters/18-sabotage', type: 'chapter' }
];

function getRelativePath(targetPath) {
    const currentPath = window.location.pathname;

    // Determine if we're in a chapter or interlude folder
    const isInChapters = currentPath.includes('/chapters/');
    const isInInterludes = currentPath.includes('/interludes/');

    // Determine if target is a chapter or interlude
    const targetIsChapter = targetPath.startsWith('chapters/');
    const targetIsInterlude = targetPath.startsWith('interludes/');

    // Calculate relative path
    if (isInChapters && targetIsChapter) {
        // Same parent folder - go up one level then into target
        return '../' + targetPath.replace('chapters/', '') + '/index.html';
    } else if (isInChapters && targetIsInterlude) {
        // Go up two levels (out of chapter folder and chapters folder) then into interludes
        return '../../' + targetPath + '/index.html';
    } else if (isInInterludes && targetIsInterlude) {
        // Same parent folder
        return '../' + targetPath.replace('interludes/', '') + '/index.html';
    } else if (isInInterludes && targetIsChapter) {
        // Go up two levels then into chapters
        return '../../' + targetPath + '/index.html';
    }

    // Fallback - assume we're at root
    return targetPath + '/index.html';
}

function isCurrentPage(itemPath) {
    const currentPath = window.location.pathname;
    return currentPath.includes(itemPath);
}

function generateNavigation() {
    const tocList = document.getElementById('toc-list');
    if (!tocList) return;

    tocList.innerHTML = NAVIGATION_DATA.map(item => {
        const href = isCurrentPage(item.path) ? '#' : getRelativePath(item.path);
        const activeClass = isCurrentPage(item.path) ? ' active' : '';
        const interludeClass = item.type === 'interlude' ? ' interlude' : '';
        const displayNum = item.type === 'interlude' ? '—' : item.num;

        return `
            <li class="toc-item">
                <a href="${href}" class="toc-link${activeClass}${interludeClass}">
                    <span class="toc-number">${displayNum}</span>
                    <span class="toc-text">${item.title}</span>
                </a>
            </li>
        `;
    }).join('');
}

function generateSidebar() {
    const sidebar = document.getElementById('nav-sidebar');
    if (!sidebar) return;

    sidebar.innerHTML = `
        <header class="sidebar-header">
            <div class="archive-badge">Archive Active</div>
            <h1 class="archive-title">virtueOS</h1>
            <p class="archive-subtitle">Collected Artifacts, 2026-2028</p>
        </header>
        <nav class="toc-section">
            <div class="toc-label">Contents</div>
            <ul class="toc" id="toc-list"></ul>
        </nav>
    `;

    generateNavigation();
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', generateSidebar);
