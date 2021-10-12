import { Card, Grid } from '@mui/material';
import React, { FC } from 'react';
import { ITrack } from '../types/track';
import styles from '../styles/TrackItem.module.scss';
import { IconButton } from '@mui/material';
import { PlayArrow, Pause, Delete } from '@mui/icons-material';
import { useRouter } from 'next/dist/client/router';

interface ITrackItemProps {
	track: ITrack;
	active?: boolean;
}

const TrackItem: FC<ITrackItemProps> = ({ track, active = false }) => {
	const router = useRouter();

	return (
		<Card className={styles.track} onClick={() => router.push(`/tracks/${track._id}`)}>
			<IconButton onClick={e => e.stopPropagation()}>{active ? <Pause /> : <PlayArrow />}</IconButton>
			<img width={70} height={70} src={track.picture} />
			<Grid container direction='column' style={{ width: 200, margin: '0 20px' }}>
				<div>{track.name}</div>
				<div style={{ fontSize: 12, color: 'gray' }}>{track.artist}</div>
			</Grid>
			{active && <div>02:42 / 03:22</div>}
			<IconButton style={{ margin: '0 0 0 auto' }} onClick={e => e.stopPropagation()}>
				<Delete />
			</IconButton>
		</Card>
	);
};

export default TrackItem;