import React from 'react';
import Pagination from './Pagination';
import User from './User';

// state
// current page

class UsersList extends React.Component {
  state = {
    currentPage: 1,
  };

  itemsPerPage = 3;

  prevBtnHandler = () => {
    this.setState({
      currentPage: this.state.currentPage - 1,
    });
  };

  nextBtnHandler = () => {
    this.setState({
      currentPage: this.state.currentPage + 1,
    });
  };

  render() {
    const { users } = this.props;
    const { currentPage } = this.state;

    const start = (currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    const usersToRender = users.slice(start, end);

    return (
      <div>
        <Pagination
          currentPage={currentPage}
          goPrev={this.prevBtnHandler}
          goNext={this.nextBtnHandler}
          totalItems={users.length}
          itemsPerPage={this.itemsPerPage}
        />

        <ul className="users">
          {usersToRender.map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
