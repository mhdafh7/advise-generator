import { useState, useRef } from "react"
import Card from "./Card"
import { useGetSearchAdviceQuery } from "../features/api/apiSlice"

const SearchPage = () => {
    const [query, setQuery] = useState("")
    const [result, setResult] = useState(null)
    const {
        data: advices,
        isLoading,
        isError,
        error,
    } = useGetSearchAdviceQuery(query)

    const handleQuery = (e) => {
        setQuery(e.target.value)
    }
    const handleSearch = () => {
        if (query === "") {
            return console.log("Enter something")
        }

        if (error) {
            console.error(error)
            console.log("There was an error")
        } else if (isLoading) {
            console.log("loading")
        } else if (advices.slips) {
            // console.log(advices)
            setResult(advices.slips[0])
        } else {
            console.log(advices.message.text)
        }
        // console.log(result)
    }

    return (
        <div className="search-container">
            <div className="search">
                <input
                    type="search"
                    name="advice-search"
                    id="advice-search"
                    placeholder="Search on a topic"
                    onChange={handleQuery}
                />
                <button
                    type="submit"
                    id="search-btn"
                    onClick={handleSearch}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                    >
                        <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
                    </svg>
                </button>
            </div>
            {isError ? (
                <h4>Oh no! something gone wrong!</h4>
            ) : isLoading ? (
                <h4>Loading...</h4>
            ) : result ? (
                <Card
                    id={result.id}
                    advice={result.advice}
                />
            ) : null}
        </div>
    )
}
export default SearchPage
