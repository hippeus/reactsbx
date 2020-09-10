import React, { useState, useEffect, ChangeEvent } from "react";
import axios from "axios";

interface termData {
  pageid: number;
  title: string;
  snippet: string;
}

interface wikiSearchResponse extends Array<any> {
  [index: number]: termData;
}

const WikiSearch = (): JSX.Element => {
  const [term, setTerm] = useState<string>("");
  // debouncedTerm refers to a term after it stabilization
  const [debouncedTerm, setDebouncedTerm] = useState<string>("");
  const [results, setResults] = useState<wikiSearchResponse>([]);

  // useEffect is a react hook acting similar to ComponentDidMount && ComponentUpdated.
  // second argument controls render flow:
  // 'null' - always
  // '[]' - once on mount
  // '[vars...] - on mount and always when vars... changes
  //
  // Note: async function need additional wrapping within a body.

  // useEffect Hook for term which is responsible for dealing with any
  // interferences on user input
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 500);
    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  // useEffect Hook for debounced Term
  useEffect(() => {
    const wrappedApiCall = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: debouncedTerm,
        },
      });

      setResults(data.query.search);
    };

    if (debouncedTerm) {
      wrappedApiCall();
    }
  }, [debouncedTerm]);

  const renderedResults = results.map(
    (it: termData): JSX.Element => {
      return (
        <div className='item' key={it.pageid}>
          <div className='right floated content'>
            <a
              className='ui button'
              href={`https://en.wikipedia.org?curid=${it.pageid}`}
            >
              Go
            </a>
          </div>
          <div className='content'>
            <div className='header'>{it.title}</div>
            <span dangerouslySetInnerHTML={{ __html: it.snippet }} />
          </div>
        </div>
      );
    }
  );

  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label>Enter Search Team</label>
          <input
            className='input'
            value={term}
            onChange={(e: ChangeEvent<HTMLInputElement>): void => {
              setTerm(e.target.value);
            }}
          ></input>
        </div>
      </div>
      <div className='ui celled list'>{renderedResults}</div>
    </div>
  );
};

export default WikiSearch;
