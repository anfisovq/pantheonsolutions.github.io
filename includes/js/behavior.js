document.addEventListener('DOMContentLoaded', () => {
    const langBox = document.querySelector('.lang-toggle');
    const langDisplay = document.querySelector('.lang-current');
    const langChoices = document.querySelector('.lang-options');
    const langItems = document.querySelectorAll('.lang-options div');

    // Language translations
    const langData = {
        ru: {
            heading: 'pantheon.solutions',
            btnText: 'Получить лоадер',
            instText: 'Посмотреть инструкцию',
            instructionHeading: 'Инструкция',
            instructionHtml: `
                <h2>Шаги:</h2>
                <ol>
                    <li>Выключите античиты FACEIT/VANGUARD:
                        <ul>
                            <li>sc stop faceit</li>
                            <li>sc stop vgc</li>
                            <li>sc stop vgk</li>
                        </ul>
                    </li>
                    <li>Выключите любое антивирусное ПО на вашем ПК.</li>
                    <li>Закройте игру, если она уже запущена.</li>
                    <li>Откройте лоадер.</li>
                    <li>Скопируйте полученный ключ от продавца и вставьте в лоадер.</li>
                    <li>Ожидайте загрузки лоадера.</li>
                    <li>Запустите игру через Steam или EXBO Launcher.</li>
                    <li>Нажмите <strong>F9 ДВА РАЗА!!</strong> и дождитесь звукового сигнала.<br>
                        Для EXBO: в момент до запуска, когда появится уведомление в углу, до появления окна игры.<br>
                        Для STEAM: когда исчезнет окно загрузки, до появления окна игры.</li>
                    <li>Нажмите <strong>Home</strong>, чтобы открыть меню.</li>
                    <li>Настройте чит.</li>
                    <li>Наслаждайтесь игрой с нашим продуктом.</li>
                </ol>
                <hr>
                <h2>Рекомендации по использованию (обязательно к прочтению):</h2>
                <ol>
                    <li>Не повышайте резко свой коэффициент K/D.</li>
                    <li>Избегайте конфликтов с другими игроками, чтобы не получить бан вручную.</li>
                    <li>Не упоминайте в игровом чате, что используете читы.</li>
                    <li>Играйте максимально легитно.</li>
                </ol>
                <hr>
                <h2>Рекомендации по возможным ошибкам:</h2>
                <ol>
                    <li><strong>timestamp too old</strong> - Синхронизируйте время в системе <strong>дважды!!!!!</strong></li>
                    <li><strong>Краши при инжекте</strong> - Перезагрузите ПК.</li>
                    <li><strong>Краши во время игры</strong> - Свяжитесь с поддержкой, мы исправим.</li>
                </ol>
            `
        },
        en: {
            heading: 'pantheon.solutions',
            btnText: 'Get Loader',
            instText: 'Get Instruction',
            instructionHeading: 'Instruction',
            instructionHtml: `
                <h2>Steps:</h2>
                <ol>
                    <li>Disable FACEIT/VANGUARD anti-cheats:
                        <ul>
                            <li>sc stop faceit</li>
                            <li>sc stop vgc</li>
                            <li>sc stop vgk</li>
                        </ul>
                    </li>
                    <li>Disable any antivirus software on your PC.</li>
                    <li>Close the game if it is already running.</li>
                    <li>Open the loader.</li>
                    <li>Copy the key received from the seller and paste it into the loader.</li>
                    <li>Wait for the loader to complete loading.</li>
                    <li>Launch the game through Steam or EXBO Launcher.</li>
                    <li>Press <strong>F9 TWICE!!</strong> and wait for the sound signal.<br>
                        For EXBO: press before the game launches, when the notification appears in the corner, before the game window opens.<br>
                        For STEAM: press when the loading window disappears, before the game window appears.</li>
                    <li>Press <strong>Home</strong> to open the menu.</li>
                    <li>Configure the cheat.</li>
                    <li>Enjoy the game with our product.</li>
                </ol>
                <hr>
                <h2>Recommendations for Use (Mandatory Reading):</h2>
                <ol>
                    <li>Do not sharply increase your K/D ratio.</li>
                    <li>Avoid conflicts with other players to prevent manual bans.</li>
                    <li>Do not mention in the game chat that you are using cheats.</li>
                    <li>Play as legitimately as possible.</li>
                </ol>
                <hr>
                <h2>Recommendations for Possible Errors:</h2>
                <ol>
                    <li><strong>timestamp too old</strong> - Synchronize the system time <strong>twice!!!!!</strong></li>
                    <li><strong>crashes during injection</strong> - Restart your PC.</li>
                    <li><strong>crashes during gameplay</strong> - Contact support, and we will resolve it.</li>
                </ol>
            `
        },
        zh: {
            heading: 'pantheon.solutions',
            btnText: '获取加载器',
            instText: '获取说明',
            instructionHeading: '说明',
            instructionHtml: `
                <h2>步骤:</h2>
                <ol>
                    <li>禁用 FACEIT/VANGUARD 反作弊程序:
                        <ul>
                            <li>sc stop faceit</li>
                            <li>sc stop vgc</li>
                            <li>sc stop vgk</li>
                        </ul>
                    </li>
                    <li>禁用您电脑上的任何防病毒软件。</li>
                    <li>如果游戏已在运行，请关闭游戏。</li>
                    <li>打开加载器。</li>
                    <li>复制从卖家获得的密钥并粘贴到加载器中。</li>
                    <li>等待加载器完成加载。</li>
                    <li>通过 Steam 或 EXBO Launcher 启动游戏。</li>
                    <li>按 <strong>F9 两次!!</strong> 并等待声音信号。<br>
                        对于 EXBO：在游戏启动前，当角落出现通知时，在游戏窗口出现前按下。<br>
                        对于 STEAM：当加载窗口消失时，在游戏窗口出现前按下。</li>
                    <li>按 <strong>Home</strong> 打开菜单。</li>
                    <li>配置作弊程序。</li>
                    <li>使用我们的产品享受游戏。</li>
                </ol>
                <hr>
                <h2>使用推荐（必读）:</h2>
                <ol>
                    <li>不要急剧提高您的 K/D 比率。</li>
                    <li>避免与其他玩家发生冲突，以免被手动封禁。</li>
                    <li>不要在游戏聊天中提及您使用作弊程序。</li>
                    <li>尽量以合法方式玩游戏。</li>
                </ol>
                <hr>
                <h2>可能错误推荐:</h2>
                <ol>
                    <li><strong>timestamp too old</strong> - 在系统中同步时间 <strong>两次!!!!!</strong></li>
                    <li><strong>注入期间崩溃</strong> - 重新启动您的电脑。</li>
                    <li><strong>游戏期间崩溃</strong> - 联系支持团队，我们将修复问题。</li>
                </ol>
            `
        }
    };

    const defaultLang = 'ru';
    if (document.querySelector('h1')) {
        document.querySelector('h1').textContent = langData[defaultLang].heading;
    }
    if (document.querySelector('.load-btn')) {
        document.querySelector('.load-btn').childNodes[2].textContent = ` ${langData[defaultLang].btnText}`;
    }
    if (document.querySelector('.inst-btn')) {
        document.querySelector('.inst-btn').childNodes[2].textContent = ` ${langData[defaultLang].instText}`;
    }
    const instructionContent = document.querySelector('.instruction-content');
    if (instructionContent) {
        document.querySelector('h1').textContent = langData[defaultLang].instructionHeading;
        instructionContent.innerHTML = langData[defaultLang].instructionHtml;
    }

    langDisplay.addEventListener('click', () => {
        langBox.classList.toggle('active');
    });

    langItems.forEach(item => {
        item.addEventListener('click', () => {
            const langCode = item.getAttribute('data-lang');
            langDisplay.innerHTML = `<img src="includes/img/language.svg" alt="Language Icon" class="lang-icon">`;
            langBox.classList.remove('active');

            // Update page text
            if (document.querySelector('h1')) {
                document.querySelector('h1').textContent = langData[langCode].heading;
            }
            if (document.querySelector('.load-btn')) {
                document.querySelector('.load-btn').childNodes[2].textContent = ` ${langData[langCode].btnText}`;
            }
            if (document.querySelector('.inst-btn')) {
                document.querySelector('.inst-btn').childNodes[2].textContent = ` ${langData[langCode].instText}`;
            }
            if (instructionContent) {
                document.querySelector('h1').textContent = langData[langCode].instructionHeading;
                instructionContent.innerHTML = langData[langCode].instructionHtml;
            }
        });
    });

    document.addEventListener('click', (event) => {
        if (!langBox.contains(event.target)) {
            langBox.classList.remove('active');
        }
    });
});
