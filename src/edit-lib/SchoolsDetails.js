import {format} from 'date-fns'
import ru from 'date-fns/locale/ru'

import formatDate from 'schedule-app/common/util/formatDate'
import formatTime from 'schedule-app/common/util/formatTime'

// информации о школах

const schoolsDetails = {
    INTERFACE: {
        1: {
            common: false,
            theme: 'Адаптивная вёрстка',
            speaker: 'Дмитрий Душкин',
            room: 'Синяя',
            date: new Date(2017, 3, 3, 18, 0),
            dateView: formatDate(new Date(2017, 3, 3, 18, 0)),
            timeView: formatTime(new Date(2017, 3, 3, 18, 0)),
            materials: 'https://ya.ru',
            video: 'https://ya.ru'
        },
        2: {
            common: false,
            theme: 'Работа с сенсорным пользовательским вводом',
            speaker: 'Дмитрий Душкин',
            room: 'Синяя',
            date: new Date(2017, 3, 7, 18, 0),
            dateView: formatDate(new Date(2017, 3, 7, 18, 0)),
            timeView: formatTime(new Date(2017, 3, 7, 18, 0)),
            materials: 'https://ya.ru',
            video: 'https://ya.ru'
        },
        3: {
            common: true,
            theme: 'Особенности проектирования мобильных интерфейсов',
            speaker: 'Васюнин Николай',
            room: 'Просторная',
            date: new Date(2017, 3, 10, 18, 0),
            dateView: formatDate(new Date(2017, 3, 10, 18, 0)),
            timeView: formatTime(new Date(2017, 3, 10, 18, 0)),
            materials: 'https://ya.ru',
            video: 'https://ya.ru'
        },
        4: {
            common: false,
            theme: 'Нативные приложения на веб-технологиях',
            speaker: 'Сергей Бережной',
            room: 'Синяя',
            date: new Date(2017, 4, 15, 18, 0),
            dateView: formatDate(new Date(2017, 4, 15, 18, 0)),
            timeView: formatTime(new Date(2017, 4, 15, 18, 0)),
            materials: 'https://ya.ru',
            video: 'https://ya.ru'
        },
        5: {
            common: true,
            theme: 'Природа операционных систем',
            speaker: 'Васюнин Николай',
            room: 'Просторная',
            date: new Date(2017, 4, 19, 18, 0),
            dateView: formatDate(new Date(2017, 4, 19, 18, 0)),
            timeView: formatTime(new Date(2017, 4, 19, 18, 0)),
            materials: 'https://ya.ru',
            video: 'https://ya.ru'
        },
        6: {
            common: false,
            theme: 'Клиентская оптимизация: мобильные устройства и инструменты',
            speaker: 'Иван Карев',
            room: 'Синяя',
            date: new Date(2017, 4, 22, 18, 0),
            dateView: formatDate(new Date(2017, 4, 22, 18, 0)),
            timeView: formatTime(new Date(2017, 4, 22, 18, 0)),
            materials: 'https://ya.ru',
            video: 'https://ya.ru'
        }
    },
    MOBILE: {
        1: {
            common: false,
            theme: 'Java Blitz (Часть 1)',
            speaker: 'Эдуард Мацуков',
            room: 'Желтая',
            date: new Date(2017, 3, 3, 18, 0),
            dateView: formatDate(new Date(2017, 3, 3, 18, 0)),
            timeView: formatTime(new Date(2017, 3, 3, 18, 0)),
            materials: 'https://ya.ru',
            video: 'https://ya.ru'
        },
        2: {
            common: false,
            theme: 'Git & Workflow',
            speaker: 'Дмитрий Складнов',
            room: 'Желтая',
            date: new Date(2017, 3, 7, 18, 0),
            dateView: formatDate(new Date(2017, 3, 7, 18, 0)),
            timeView: formatTime(new Date(2017, 3, 7, 18, 0)),
            materials: 'https://ya.ru',
            video: 'https://ya.ru'
        },
        3: {
            common: true,
            theme: 'Особенности проектирования мобильных интерфейсов',
            speaker: 'Васюнин Николай',
            room: 'Просторная',
            date: new Date(2017, 3, 10, 18, 0),
            dateView: formatDate(new Date(2017, 3, 10, 18, 0)),
            timeView: formatTime(new Date(2017, 3, 10, 18, 0)),
            materials: 'https://ya.ru',
            video: 'https://ya.ru'
        },
        4: {
            common: false,
            theme: 'MyFirstApp (Часть 1)',
            speaker: 'Роман Григорьев',
            room: 'Желтая',
            date: new Date(2017, 4, 15, 18, 0),
            dateView: formatDate(new Date(2017, 4, 15, 18, 0)),
            timeView: formatTime(new Date(2017, 4, 15, 18, 0)),
            materials: 'https://ya.ru',
            video: 'https://ya.ru'
        },
        5: {
            common: true,
            theme: 'Природа операционных систем',
            speaker: 'Васюнин Николай',
            room: 'Просторная',
            date: new Date(2017, 4, 19, 18, 0),
            dateView: formatDate(new Date(2017, 4, 19, 18, 0)),
            timeView: formatTime(new Date(2017, 4, 19, 18, 0)),
            materials: 'https://ya.ru',
            video: 'https://ya.ru'
        },
        6: {
            common: false,
            theme: 'ViewGroup',
            speaker: 'Алексей Щербинин',
            room: 'Желтая',
            date: new Date(2017, 4, 22, 18, 0),
            dateView: formatDate(new Date(2017, 4, 22, 18, 0)),
            timeView: formatTime(new Date(2017, 4, 22, 18, 0)),
            materials: 'https://ya.ru',
            video: 'https://ya.ru'
        }
    },
    DESIGN: {
        1: {
            common: false,
            theme: 'Идея, исследование, концепт (Часть 1)',
            speaker: 'Антон Тен',
            room: 'Красная',
            date: new Date(2017, 3, 3, 18, 0),
            dateView: formatDate(new Date(2017, 3, 3, 18, 0)),
            timeView: formatTime(new Date(2017, 3, 3, 18, 0)),
            materials: 'https://ya.ru',
            video: 'https://ya.ru'
        },
        2: {
            common: false,
            theme: 'Идея, исследование, концепт (Часть 2)',
            speaker: 'Антон Тен',
            room: 'Красная',
            date: new Date(2017, 3, 7, 18, 0),
            dateView: formatDate(new Date(2017, 3, 7, 18, 0)),
            timeView: formatTime(new Date(2017, 3, 7, 18, 0)),
            materials: 'https://ya.ru',
            video: 'https://ya.ru'
        },
        3: {
            common: true,
            theme: 'Особенности проектирования мобильных интерфейсов',
            speaker: 'Васюнин Николай',
            room: 'Просторная',
            date: new Date(2017, 3, 10, 18, 0),
            dateView: formatDate(new Date(2017, 3, 10, 18, 0)),
            timeView: formatTime(new Date(2017, 3, 10, 18, 0)),
            materials: 'https://ya.ru',
            video: 'https://ya.ru'
        },
        4: {
            common: false,
            theme: 'Продукт и платформа',
            speaker: 'Сергей Калабин',
            room: 'Красная',
            date: new Date(2017, 4, 15, 18, 0),
            dateView: formatDate(new Date(2017, 4, 15, 18, 0)),
            timeView: formatTime(new Date(2017, 4, 15, 18, 0)),
            materials: 'https://ya.ru',
            video: 'https://ya.ru'
        },
        5: {
            common: true,
            theme: 'Природа операционных систем',
            speaker: 'Васюнин Николай',
            room: 'Просторная',
            date: new Date(2017, 4, 19, 18, 0),
            dateView: formatDate(new Date(2017, 4, 19, 18, 0)),
            timeView: formatTime(new Date(2017, 4, 19, 18, 0)),
            materials: 'https://ya.ru',
            video: 'https://ya.ru'
        },
        6: {
            common: false,
            theme: 'Прототипирование как процесс',
            speaker: 'Сергей Томилов',
            room: 'Красная',
            date: new Date(2017, 4, 22, 18, 0),
            dateView: formatDate(new Date(2017, 4, 22, 18, 0)),
            timeView: formatTime(new Date(2017, 4, 22, 18, 0)),
            materials: 'https://ya.ru',
            video: 'https://ya.ru'
        }
    }
}

export default schoolsDetails
