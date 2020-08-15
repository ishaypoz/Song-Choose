import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends React.Component {
	renderList() {
		return this.props.songs.map((song) => {
			return (
				<div className="item" key={song.title}>
					<div className="right floated content">
						<button className="ui button primary" onClick={() => this.props.selectSong(song)}>
							Select
						</button>
					</div>
					<div className="content">{song.title}</div>
				</div>
			);
		});
	}
	render() {
		//this is this class so we dont need arrow funtion to bind it
		return <div className="ui divided list">{this.renderList()}</div>;
	}
}
//take all the data from the provider, the redux store
const mapStateToProps = (state) => {
	// every time update the redux store this function will run
	//state have all the data in store
	return { songs: state.songs }; //when its equal to inside the SongList class this.props === { songs:state.songs }
};
//we give the connect the function that we want it to use to return the redux store
export default connect(mapStateToProps, { selectSong: selectSong })(SongList); //connect return a function and the other (SongList) applay it to the function
//the selectSong the connect will pass it as props after we imported it cqn use only selectSong
//the connect alos will wrap the action in other dispatch functoin that will update the store
