const schoolsDetails = {
    INTERFACE: {
        1: {
            common: false,
            theme: 'Адаптивная вёрстка',
            speaker: 'Дмитрий Душкин',
            room: 'Синяя',
            date: new Date(2016, 1, 25, 18, 0),
            time: new Date(2016, 1, 25, 18, 0),
            materials: 'materials1',
            video: 'video1'
        },
        2: {
            common: false,
            theme: 'Работа с сенсорным пользовательским вводом',
            speaker: 'Дмитрий Душкин',
            room: 'Синяя',
            date: new Date(2016, 1, 25, 18, 0),
            time: new Date(2016, 1, 25, 18, 0),
            materials: 'materials2',
            video: 'video2'
        },
        3: {
            common: true,
            theme: 'Особенности проектирования мобильных интерфейсов',
            speaker: 'Васюнин Николай',
            room: 'Просторная',
            date: new Date(2016, 1, 25, 18, 0),
            time: new Date(2016, 1, 25, 18, 0),
            materials: 'materials2',
            video: 'video2'
        },
        4: {
            common: false,
            theme: 'Нативные приложения на веб-технологиях',
            speaker: 'Сергей Бережной',
            room: 'Синяя',
            date: new Date(2016, 1, 25, 18, 0),
            time: new Date(2016, 1, 25, 18, 0),
            materials: 'materials2',
            video: 'video2'
        },
        5: {
            common: true,
            theme: 'Природа операционных систем',
            speaker: 'Васюнин Николай',
            room: 'Просторная',
            date: new Date(2016, 1, 25, 18, 0),
            time: new Date(2016, 1, 25, 18, 0),
            materials: 'materials2',
            video: 'video2'
        },
        6: {
            common: false,
            theme: 'Клиентская оптимизация: мобильные устройства и инструменты',
            speaker: 'Иван Карев',
            room: 'Синяя',
            date: new Date(2016, 1, 25, 18, 0),
            time: new Date(2016, 1, 25, 18, 0),
            materials: 'materials2',
            video: 'video2'
        }
    },
    MOBILE: {
        1: {
            common: false,
            theme: 'Java Blitz (Часть 1)',
            speaker: 'Эдуард Мацуков',
            room: 'Желтая',
            date: new Date(2016, 1, 25, 18, 0),
            time: new Date(2016, 1, 25, 18, 0),
            materials: 'materials',
            video: 'video'
        },
        2: {
            common: false,
            theme: 'Git & Workflow',
            speaker: 'Дмитрий Складнов',
            room: 'Желтая',
            date: new Date(2016, 1, 25, 18, 0),
            time: new Date(2016, 1, 25, 18, 0),
            materials: 'materials',
            video: 'video'
        },
        3: {
            common: true,
            theme: 'Особенности проектирования мобильных интерфейсов',
            speaker: 'Васюнин Николай',
            room: 'Просторная',
            date: new Date(2016, 1, 25, 18, 0),
            time: new Date(2016, 1, 25, 18, 0),
            materials: 'materials',
            video: 'video'
        },
        4: {
            common: false,
            theme: 'MyFirstApp (Часть 1)',
            speaker: 'Роман Григорьев',
            room: 'Желтая',
            date: new Date(2016, 1, 25, 18, 0),
            time: new Date(2016, 1, 25, 18, 0),
            materials: 'materials',
            video: 'video'
        },
        5: {
            common: true,
            theme: 'Природа операционных систем',
            speaker: 'Васюнин Николай',
            room: 'Просторная',
            date: new Date(2016, 1, 25, 18, 0),
            time: new Date(2016, 1, 25, 18, 0),
            materials: 'materials',
            video: 'video'
        },
        6: {
            common: false,
            theme: 'ViewGroup',
            speaker: 'Алексей Щербинин',
            room: 'Желтая',
            date: new Date(2016, 1, 25, 18, 0),
            time: new Date(2016, 1, 25, 18, 0),
            materials: 'materials',
            video: 'video'
        }
    },
    DESIGN: {
        1: {
            common: false,
            theme: 'Идея, исследование, концепт (Часть 1)',
            speaker: 'Антон Тен',
            room: 'Красная',
            date: new Date(2016, 1, 25, 18, 0),
            time: new Date(2016, 1, 25, 18, 0),
            materials: 'materials',
            video: 'video'
        },
        2: {
            common: false,
            theme: 'Идея, исследование, концепт (Часть 2)',
            speaker: 'Антон Тен',
            room: 'Красная',
            date: new Date(2016, 1, 25, 18, 0),
            time: new Date(2016, 1, 25, 18, 0),
            materials: 'materials',
            video: 'video'
        },
        3: {
            common: true,
            theme: 'Особенности проектирования мобильных интерфейсов',
            speaker: 'Васюнин Николай',
            room: 'Просторная',
            date: new Date(2016, 1, 25, 18, 0),
            time: new Date(2016, 1, 25, 18, 0),
            materials: 'materials',
            video: 'video'
        },
        4: {
            common: false,
            theme: 'Продукт и платформа',
            speaker: 'Сергей Калабин',
            room: 'Красная',
            date: new Date(2016, 1, 25, 18, 0),
            time: new Date(2016, 1, 25, 18, 0),
            materials: 'materials',
            video: 'video'
        },
        5: {
            common: true,
            theme: 'Природа операционных систем',
            speaker: 'Васюнин Николай',
            room: 'Просторная',
            date: new Date(2016, 1, 25, 18, 0),
            time: new Date(2016, 1, 25, 18, 0),
            materials: 'materials',
            video: 'video'
        },
        6: {
            common: false,
            theme: 'Прототипирование как процесс',
            speaker: 'Сергей Томилов',
            room: 'Красная',
            date: new Date(2016, 1, 25, 18, 0),
            time: new Date(2016, 1, 25, 18, 0),
            materials: 'materials',
            video: 'video'
        }
    }
}

export default schoolsDetails
