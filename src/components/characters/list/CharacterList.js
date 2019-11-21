import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../../constants/API";
import Spinner from "react-bootstrap/Spinner";
import "./CharacterList.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CharacterItem from "./CharacterItem";
import Search from "./Search";

export default function CharacterList() {
    const [characters, setCharacters] = useState([]);
    const [filteredCharacters, setFilteredCharacters] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(BASE_URL)
            .then(response => response.json())
            .then(json => {
                setCharacters(json.results);
                setFilteredCharacters(json.results);
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }, []);

    const filterCards = function(e) {
        const searchValue = e.target.value.toLowerCase();
    
        const filteredArray = characters.filter(function(char) {
            const lowerCaseName = char.name.toLowerCase();
    
            if (lowerCaseName.startsWith(searchValue)) {
                return true;
            }
            return false;
        });

        setFilteredCharacters(filteredArray);
    };

    if (loading) {
        return <Spinner animation="border" className="spinner" />;
    }

    return (
        <>
            <Search handleSearch={filterCards} />
            <Row>
                {filteredCharacters.map(character => {
                    const { id, name, image } = character;
    
                    return (
                        <Col sm={6} md={3} key={id}>
                            <CharacterItem id={id} name={name} image={image} />
                        </Col>
                    );
                })}
            </Row>
        </>
    );
}