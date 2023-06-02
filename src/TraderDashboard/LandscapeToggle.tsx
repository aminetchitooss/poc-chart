import * as React from 'react';
import * as screenfull from 'screenfull';

interface LandscapeToggleState {
  isFullscreenReady: boolean;
}

export default class LandscapeToggle extends React.Component<unknown, LandscapeToggleState> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      isFullscreenReady: true
    };
  }

  componentDidMount(): void {
    if (screenfull.isEnabled) {
      window.addEventListener('fullscreenchange', () => {
        this.setState({ isFullscreenReady: !screenfull.isFullscreen });
        this.handleTransition();
      });
    }
  }

  handleTransition() {
    const chartContainer = document.querySelector('#chartContainer');
    if (!chartContainer) return;
    chartContainer.classList[screenfull.isFullscreen ? 'add' : 'remove']('fullscreen');
  }

  toggle() {
    screenfull.toggle();
    if (screen.orientation.lock)
      screen.orientation
        .lock(screenfull.isFullscreen ? 'portrait' : 'landscape')
        .then()
        .catch(error => {
          console.error('Failed to change screen orientation:', error);
        });
  }

  render() {
    return (
      <div className="landscape-wrapper">
        {screenfull.isEnabled && (
          <button className="landscape" onClick={() => this.toggle()}>
            {this.state.isFullscreenReady ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M21.3814 2.077C21.6264 2.179 21.8204 2.373 21.9224 2.618C21.9734 2.74 21.9994 2.87 21.9994 3V9C21.9994 9.552 21.5524 10 20.9994 10C20.4464 10 19.9994 9.552 19.9994 9V5.414L14.7064 10.707C14.5114 10.902 14.2554 11 13.9994 11C13.7434 11 13.4874 10.902 13.2924 10.707C12.9014 10.316 12.9014 9.683 13.2924 9.293L18.5854 4H14.9994C14.4464 4 13.9994 3.552 13.9994 3C13.9994 2.448 14.4464 2 14.9994 2H20.9994C21.1294 2 21.2594 2.026 21.3814 2.077ZM4 18.5858L9.293 13.2928C9.684 12.9018 10.316 12.9018 10.707 13.2928C11.098 13.6838 11.098 14.3158 10.707 14.7068L5.414 19.9998H9C9.552 19.9998 10 20.4468 10 20.9998C10 21.5528 9.552 21.9998 9 21.9998H3C2.87 21.9998 2.74 21.9738 2.618 21.9228C2.374 21.8208 2.178 21.6268 2.077 21.3818C2.027 21.2598 2 21.1298 2 20.9998V14.9998C2 14.4468 2.448 13.9998 3 13.9998C3.552 13.9998 4 14.4468 4 14.9998V18.5858Z"
                  fill="white"
                />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.6172 10.9232C13.3722 10.8212 13.1782 10.6272 13.0762 10.3822C13.0252 10.2602 12.9992 10.1302 12.9992 10.0002L12.9992 4.00018C12.9992 3.44818 13.4462 3.00018 13.9992 3.00018C14.5522 3.00018 14.9992 3.44818 14.9992 4.00018L14.9992 7.58618L20.2922 2.29318C20.4872 2.09818 20.7432 2.00018 20.9992 2.00018C21.2552 2.00018 21.5112 2.09818 21.7062 2.29318C22.0972 2.68418 22.0972 3.31718 21.7062 3.70718L16.4132 9.00018L19.9992 9.00018C20.5522 9.00018 20.9992 9.44818 20.9992 10.0002C20.9992 10.5522 20.5522 11.0002 19.9992 11.0002L13.9992 11.0002C13.8692 11.0002 13.7392 10.9742 13.6172 10.9232ZM9.00025 16.4138L3.70725 21.7068C3.31625 22.0978 2.68425 22.0978 2.29325 21.7068C1.90225 21.3158 1.90225 20.6838 2.29325 20.2928L7.58625 14.9998L4.00025 14.9998C3.44825 14.9998 3.00025 14.5528 3.00025 13.9998C3.00025 13.4468 3.44825 12.9998 4.00025 12.9998L10.0003 12.9998C10.1303 12.9998 10.2603 13.0258 10.3823 13.0768C10.6263 13.1788 10.8223 13.3728 10.9233 13.6178C10.9733 13.7398 11.0003 13.8698 11.0003 13.9998L11.0002 19.9998C11.0002 20.5528 10.5522 20.9998 10.0002 20.9998C9.44825 20.9998 9.00025 20.5528 9.00025 19.9998L9.00025 16.4138Z"
                  fill="white"
                />
              </svg>
            )}
          </button>
        )}
      </div>
    );
  }
}
