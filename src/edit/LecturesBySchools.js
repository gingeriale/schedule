import Component from 'inferno-component'
import {observer} from 'inferno-mobx'
import jss from 'jss'
import nested from 'jss-nested'

import EditStore from 'schedule-app/edit/EditStore'
import {findLecturesBySchool} from 'edit-lib/findLectures'
import EditLibStore from 'edit-lib/EditLibStore'

// рендер таблицы с отфильтрованными лекциями для выбранной школы
// рендер кнопок и инпутов для добавления лекций и редактирования
// отображение окна ошибки в случае невыполнения условий успешного добавления/редактирования

@observer
export default class LecturesBySchools extends Component {

    render() {
        const {classes} = jss.createStyleSheet(styles).attach()
        const foundLectures = findLecturesBySchool(EditStore.school, EditStore.beginToShow, EditStore.endToShow)
        return (
            <div className={classes.lectures}>
                <div className={classes.lecturesText}>
                    По умолчанию показываются все лекции школы. 
                    Выберите даты и нажмите "показать" для выбора расписания школы за 
                    интересующий промежуток времени.
                </div>
                {EditLibStore.error.length !== 0 ? (
                    <div 
                        className={classes.lecturesError}
                        onClick={() => EditLibStore.clearError()}
                    >
                        Ошибка сохранения/редактирования:<br/>
                        {EditLibStore.error.map(error => {
                            return (
                                <div> - {error}</div>
                            )
                        })}
                    </div>
                ) : (
                    null
                )}                
                <table>
                    {Object.keys(foundLectures).map(lectureId => {
                        const lecture = foundLectures[lectureId]
                        return (
                            <tr>
                                {Object.keys(lecture).map(lectureInfoItem => {
                                    return (
                                        <td>
                                            {EditLibStore.editingLectureOfSchool === lecture.theme ? (
                                                <input
                                                    type="text"
                                                    value={EditLibStore.lectureOfSchool.get(lectureInfoItem)}
                                                    onInput={event => EditLibStore.editLectureOfSchool(lectureInfoItem, event.target.value)}
                                                />
                                            ) : (
                                                lecture[lectureInfoItem]
                                            )}
                                        </td>
                                    )
                                })}
                                {!EditLibStore.editingLectureOfSchool ? (
                                    <td>
                                        <button
                                            onClick={() => EditLibStore.setLectureOfSchoolEdit(lecture)}
                                            className={classes.lecturesButton}
                                        >
                                            редактировать
                                        </button>
                                    </td>
                                ) : (
                                    null
                                )}                                
                                {EditLibStore.editingLectureOfSchool ? (
                                    <td>
                                        <button
                                            onClick={() => EditLibStore.saveLectureOfSchool()}
                                            className={classes.lecturesButton}                                      
                                        >
                                            сохранить
                                        </button>
                                    </td>
                                ) : (
                                    null
                                )}
                                {EditLibStore.editingLectureOfSchool ? (
                                    <td>
                                        <button
                                            onClick={() => EditLibStore.cancelEditingLecture()}
                                            className={classes.lecturesButton}                                      
                                        >
                                            отмена
                                        </button>
                                    </td>
                                ) : (
                                    null
                                )}
                            </tr>
                        )
                    })}
                </table>
                {!EditLibStore.addingLectureState ? (
                    <button 
                        onClick={() => EditLibStore.changeAddingLectureState()}
                        className={classes.lecturesButton}                        
                    >
                        добавить
                    </button>
                ) : (
                    <div>
                        <table>
                            <tr>
                                <td>
                                    <input
                                        className={classes.lecturesInput}
                                        type="text"
                                        placeholder="аудитория"
                                        onChange={event => EditLibStore.addLectureInfo('room', event.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        className={classes.lecturesInput}
                                        type="text"
                                        placeholder="тема лекции"
                                        onChange={event => EditLibStore.addLectureInfo('theme', event.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        className={classes.lecturesInput}
                                        type="text"
                                        placeholder="дата в формате ГГГГ-ММ-ДД"
                                        onChange={event => EditLibStore.addLectureInfo('dateView', event.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        className={classes.lecturesInput}
                                        type="text"
                                        placeholder="время в формате ЧЧ:ММ"
                                        onChange={event => EditLibStore.addLectureInfo('timeView', event.target.value)}
                                    />
                                </td>
                            </tr>
                        </table>
                        <button 
                            onClick={() => EditLibStore.changeAddingLectureState()}
                            className={classes.lecturesButton}                            
                        >
                            сохранить
                        </button>
                        <button
                            onClick={() => EditLibStore.cancelAddingLecture()} 
                            className={classes.lecturesButton}
                        >
                            отмена
                        </button>
                        <div className={classes.lecturesInfoAdd}>необходимо заполнить все поля для добавления лекции</div>
                    </div>
                )}
            </div>
        )
    }

}

const styles = {
    lectures: {
        'margin-top': '15px',
        'font-family': 'Menlo, Monaco, monospace'       
    },
    lecturesText: {
        'margin-bottom': '10px'
    },
    lecturesButton: {
        background: '#ebcfb9',
        'margin-right': '5px',
        border: 'none',
        'border-radius': '5px',
        'text-align': 'center',
        'font-family': 'inherit',
        cursor: 'pointer'
    },
    lecturesInput: {
        width: '200px'
    },
    lecturesInfoAdd: {
        'margin-top': '10px'
    },
    lecturesError: {
        display: 'inline-block',
        color: '#6d4546',
        border: '3px solid #543532',
        'border-radius': '5px',
        cursor: 'pointer',
        '&:hover': {
            background: '#ebcfb9'
        }
    }
}

jss.use(nested())
