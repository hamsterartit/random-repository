import './App.css';
import {useState} from "react";
import {Select, RepoCard} from "./components";
import {STATE_OPTIONS} from "./utils/constants.ts";
import classNames from "classnames";
import {useRandomRepo} from "./hooks/useRandomRepo.ts";


function App() {
    const [language, setLanguage] = useState('');
    const { status, repo, search } = useRandomRepo();

    return (
        <div className="card-container">
            <div className={classNames("app-card", status === 'error' && 'error')}>
                <div className="header">
                    <div className="icon-placeholder"></div>
                    <h2>GitHub Repository Finder</h2>
                </div>

                <Select onChange={setLanguage}/>
                {status !== 'success' && <div className="status-box">{STATE_OPTIONS[status].message}</div>}
                {status === 'success' && repo && <RepoCard repo={repo}/>}
                <button className="btn dark" disabled={status === 'loading'}
                        onClick={() => search(language)}>{STATE_OPTIONS[status].buttonText}</button>
            </div>
        </div>
    );
}

export default App
