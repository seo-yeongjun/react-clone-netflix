import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from "react-router";
import axios from "../../api/axios"
import './SearchPage.css'
import useDebounce from "../../hooks/useDebounce";
import Result from "../../components/Modal/Result";

const SearchPage = () => {
    const [searchValue, setSearchValue] = useState([])

    const navigate = useNavigate();

    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    }
    let value = useDebounce(useQuery().get('q'), 500);

    useEffect(() => {
        if (value)
            fetchValue(value)
    }, [value])

    const fetchValue = async (value) => {
        const response = await axios.get(`/search/multi?include_adult=false&query=${value}`).catch(err => {
            console.log(err)
        })
        setSearchValue(response.data.results)
    }

    return searchValue.length > 0 ? (
        <section className="search-container">
            <Result movies={searchValue} navigate={navigate}></Result>
        </section>
    ) : (
        <section className="no-results">
            <div className="no-results__text">
                <p>
                    찾고자하는 검색어"{value}"에 맞는 영화가 없습니다.
                </p>
            </div>
        </section>
    );
};

export default SearchPage;
