import styled from '@emotion/styled';
import { COLORS } from './colors';

const Genres = styled.div`
    padding: 0 10px;
    color: white;
    display: flex;
    flex-wrap: wrap;

    div {
        margin: 10px;
    }

    div label {
        cursor: pointer;
    }

    div label input[type="checkbox"] {
        display: none;
    }

    div label span {
        position: relative;
        display: inline-block;
        background-color: #424242;
        padding: 10px 20px;
        color: #FFF;
        text-shadow: 0 1px 0 rgba(0, 0, 0, 0.5);
        border-radius: 30px;
        font-size: 15px;
        transition: 0.5s;
        user-select: none;
        overflow: hidden;
    }

    div label span::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 50%;
        background-color: rgba(255, 255, 255, .1);
    }
    
    div label input[type="checkbox"]:checked ~ span {
        background-color: #FFF;
        color: ${COLORS.black};
    }
`;

export default Genres;