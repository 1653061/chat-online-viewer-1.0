import styled from 'styled-components';

export const SearchBarWrapper = styled.div`
    display: table;
    height: 100%;
    width: 100%;

    .tablecell {
        display: table-cell;
        vertical-align: middle;
    }

    .SearchForm {
        margin: 0 auto;
    }

    .searchbutton {
        text-align: center;
    }

    .notiwrapper {
    }

    .noti {
        width: 15%;
        background-color: rgba(255,0,0, .3);
        color: rgb(255,0,0);
        border: 1px solid rgb(255,0,0);
        border-radius: 15px;
        text-align: center;
        vertical-align: middle;
        margin: 5px auto;
    }

    .content {
        padding-top: 10px;
    }
`