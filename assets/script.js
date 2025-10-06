        const commands = [
            { type: 'cmd', text: 'dorpew@portfolio:~$', output: 'cd /home/dorpew/portfolio', delay: 100 },
            { type: 'cmd', text: 'dorpew@portfolio:~/portfolio$', output: 'ls -la', delay: 300 },
            { type: 'out', text: 'drwxr-xr-x  5 dorpew dorpew  4096 Oct  5 2025 .', delay: 50 },
            { type: 'out', text: 'drwxr-xr-x 12 dorpew dorpew  4096 Oct  5 2025 ..', delay: 50 },
            { type: 'out', text: '-rw-r--r--  1 dorpew dorpew  2048 Oct  5 2025 about.json', delay: 50 },
            { type: 'out', text: '-rw-r--r--  1 dorpew dorpew  8192 Oct  5 2025 projects.js', delay: 50 },
            { type: 'out', text: '-rw-r--r--  1 dorpew dorpew  4096 Oct  5 2025 skills.js', delay: 50 },
            { type: 'out', text: '-rwxr-xr-x  1 dorpew dorpew  1024 Oct  5 2025 init.sh', delay: 300 },
            { type: 'cmd', text: 'dorpew@portfolio:~/portfolio$', output: 'cat about.json', delay: 300 },
            { type: 'out', text: '{', delay: 50 },
            { type: 'out', text: '  "name": "Dorpew",', delay: 50 },
            { type: 'out', text: '  "role": "Discord Bot Developer",', delay: 50 },
            { type: 'out', text: '  "skills": ["JavaScript", "Python", "Discord.js"],', delay: 50 },
            { type: 'out', text: '  "passion": ["Gaming", "Coding", "Automation"]', delay: 50 },
            { type: 'out', text: '}', delay: 300 },
            { type: 'cmd', text: 'dorpew@portfolio:~/portfolio$', output: 'node init.js', delay: 300 },
            { type: 'out', text: '> portfolio@1.0.0 start', delay: 100 },
            { type: 'out', text: '> Building portfolio...', delay: 200 },
            { type: 'out', text: '✓ Compiled successfully!', delay: 300 },
            { type: 'cmd', text: 'dorpew@portfolio:~/portfolio$', output: 'npm start', delay: 300 },
            { type: 'out', text: 'Starting development server...', delay: 200 },
            { type: 'out', text: 'Loading components... ✓', delay: 200 },
            { type: 'out', text: 'Server running... ✓', delay: 200 },
            { type: 'out', text: 'Portfolio ready at https://dorpew.is-a.dev', delay: 500 }
        ];

        let currentCmd = 0;
        const terminalOutput = document.getElementById('terminal-output');

        function executeCommand() {
            if (currentCmd < commands.length) {
                const cmd = commands[currentCmd];
                const line = document.createElement('div');
                line.className = 'terminal-line';

                if (cmd.type === 'cmd') {
                    line.innerHTML = `<span class="command-prompt">${cmd.text}</span><span class="command-text">${cmd.output}</span>`;
                } else {
                    line.innerHTML = `<span class="output-text">${cmd.text}</span>`;
                }

                terminalOutput.appendChild(line);
                terminalOutput.scrollTop = terminalOutput.scrollHeight;
                currentCmd++;

                setTimeout(executeCommand, cmd.delay);
            } else {
                setTimeout(() => {
                    document.getElementById('intro').classList.add('hidden');
                    document.getElementById('main-content').classList.add('show');
                    startTyping();
                }, 1000);
            }
        }

        executeCommand();

        function toggleMobileMenu() {
            const menu = document.getElementById('mobileMenu');
            const menuBtn = document.getElementById('menuBtn');
            const closeBtn = document.getElementById('mobileCloseBtn');
            
            menu.classList.toggle('open');
            menuBtn.classList.toggle('active');
            
            if (menu.classList.contains('open')) {
                closeBtn.style.display = 'block';
            } else {
                closeBtn.style.display = 'none';
            }
        }

        function showPage(pageName) {
            const pages = document.querySelectorAll('.page');
            const buttons = document.querySelectorAll('.nav-links button');
            const mobileButtons = document.querySelectorAll('.mobile-menu-links button');

            pages.forEach(page => page.classList.remove('active'));
            buttons.forEach(btn => btn.classList.remove('active'));
            mobileButtons.forEach(btn => btn.classList.remove('active'));

            document.getElementById('page-' + pageName).classList.add('active');
            
            const desktopBtn = document.querySelector(`[data-page="${pageName}"]`);
            const mobileBtn = document.querySelector(`[data-page-mobile="${pageName}"]`);
            
            if (desktopBtn) desktopBtn.classList.add('active');
            if (mobileBtn) mobileBtn.classList.add('active');
        }

        const typingText = "developer@portfolio:~$ node showcase-projects.js";
        let charIndex = 0;

        function startTyping() {
            const element = document.getElementById('typing-text');
            if (charIndex < typingText.length) {
                element.textContent += typingText.charAt(charIndex);
                charIndex++;
                setTimeout(startTyping, 50);
            }
        }
