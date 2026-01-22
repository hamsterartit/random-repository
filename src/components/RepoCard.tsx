import type {Repository} from "../utils/models.ts";

type Props = {
    repo:Repository;
}

const RepoCard = ({repo}: Props) => {


    return (
        <a className="repo-card" href={repo.url}>
            <div className="repo-header">
                <h3>{repo.name}</h3>
                <span className="external-icon">↗</span>
            </div>
            <p className="repo-desc">{repo.description}</p>
            <div className="repo-stats">
                <span><i className="dot yellow"></i> {repo.language}</span>
                <span>⭐ {repo.stars}</span>
                <span>🍴 {repo.forks}</span>
                <span>ⓘ {repo.openIssues}</span>
            </div>
        </a>
    )
}
export default RepoCard;