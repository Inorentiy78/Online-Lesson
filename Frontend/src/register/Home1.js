import React, { useState, useEffect } from 'react';
import './Home1.css';
import Podrobnee from './Podrobnee';
import Header from './Header';
import Cards from './Cards';

function Home1() {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [searchInput, setSearchInput] = useState('');
    const [filteredCourses, setFilteredCourses] = useState([]);
    const [courses, setCourses] = useState([
        { id: 1, title: 'Английский' },
        { id: 2, title: 'Испанский' },
        { id: 3, title: 'Итальянский' },
        { id: 4, title: 'Казахский' },
        { id: 5, title: 'Китайский' },
        { id: 6, title: 'Русский' },
    ]);
    const [showNoResults, setShowNoResults] = useState(false);

    const handleSearch = () => {
        const keyword = searchInput.toLowerCase().trim();
        const filtered = courses.filter(course =>
            keyword.includes(course.title.toLowerCase())
        );
        setFilteredCourses(filtered);
        setShowNoResults(filtered.length === 0 && keyword.length > 0);
    };

    const openModal = (language) => {
        setSelectedLanguage(language);
        setModalOpen(true);
    };

    const closeModal = () => {
        setSelectedLanguage('');
        setModalOpen(false);
    };

    const handleInputChange = (e) => {
        setSearchInput(e.target.value);
        setShowNoResults(false); // Скрыть надпись при изменении значения поля
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            const modal = document.querySelector('.container');
            if (modal && !modal.contains(event.target)) {
                setModalOpen(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    return (
        <div className="container">
            <Podrobnee isOpen={modalOpen} onClose={closeModal} language={selectedLanguage} />
            <div className="main-screen"></div>
            <Header />

            <input
                type="text"
                className="search-input"
                placeholder="Введите название курса..."
                value={searchInput}
                onChange={handleInputChange}
            />
            <div className="search-button" onClick={handleSearch}>
                Найти
            </div>

            {/* Render filtered courses */}
            <div className="language-courses-list">
                {filteredCourses.length > 0 ? (
                    filteredCourses.map(course => (
                        <div key={course.id} className="course-card" onClick={() => openModal(course.title)}>
                            {course.title}
                        </div>
                    ))
                ) : (
                    showNoResults && (
                        <div className="no-results">Такого языка еще нет.</div>
                    )
                )}
            </div>

            <div className='asd'>
                <div className='card-column1'>
                    <Cards title="Английский язык" onClick={() => openModal('Английский язык')} />
                    <Cards title="Испанский язык" onClick={() => openModal('Испанский язык')} />
                    <Cards title="Итальянский язык" onClick={() => openModal('Итальянский язык')} />
                </div>
                <div className='card-column2'>
                    <Cards title="Казахский язык" onClick={() => openModal('Казахский язык')} />
                    <Cards title="Китайский язык" onClick={() => openModal('Китайский язык')} />
                    <Cards title="Русский язык" onClick={() => openModal('Русский язык')} />
                </div>
            </div>

            <div className="line"></div>

            <div className="search-string"></div>

            <div className="language-courses-list">
                <div className="english-card">Английский язык</div>
                <div className="spanish-card">Испанский язык</div>
                <div className="italian-card">Итальянский язык</div>
                <div className="kazakh-card">Казахский язык</div>
                <div className="chinese-card">Китайский язык</div>
                <div className="russian-card">Русский язык</div>
            </div>
        </div>
    );
}

export default Home1;
