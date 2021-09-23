import React from 'react'

export function Result({ result, openPopup }: any) {
	return (
		<div className="result" onClick={() => openPopup(result.imdbID)}>
			<img src={result.Poster} alt="" />
			<h3>{result.Title}</h3>
		</div>
	)
}

