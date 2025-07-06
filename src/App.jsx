import { useState } from 'react';
import { episodeList } from './data';
import './index.css';

function EpisodeList({ episodes, onSelect, selectedId }) {
  return (
    <div className="episode-list">
      <h2>Dark Echoes<br /><span>Episodes</span></h2>
      <ul>
        {episodes.map((episode) => (
          <li
            key={episode.id}
            onClick={() => onSelect(episode)}
            className={episode.id === selectedId ? 'selected' : ''}
          >
            {episode.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

function EpisodeDetails({ episode }) {
  if (!episode) {
    return (
      <div className="episode-details">
        <p>Please select an episode to view details.</p>
      </div>
    );
  }

  return (
    <div className="episode-details">
      <h3>Episode {episode.id}</h3>
      <h2>{episode.title}</h2>
      <p>{episode.description}</p>
      <button>Watch now</button>
    </div>
  );
}

export default function App() {
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  return (
    <div className="container">
      <EpisodeList
        episodes={episodeList}
        onSelect={setSelectedEpisode}
        selectedId={selectedEpisode?.id}
      />
      <EpisodeDetails episode={selectedEpisode} />
    </div>
  );
}