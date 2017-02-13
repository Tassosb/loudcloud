# Component Hierarchy

- App
  - NavBar
  - AuthModal
  - Splash
  - TrackView
  - Stream
  - Charts
  - Upload
  - ProgressBar
  - Footer

- AuthModal
  - CreateAccountForm Container
    - CreateAccountForm
      - AuthForm
  - SigninForm Container
    - SigninForm
      - AuthForm

- Splash Container
  - Splash
    - SplashBanner
      - CreateAccountButton
      - SigninButton
    - SearchBar
    - SplashTrackIndex
      - TrackTile
        - TrackTileCaption
    - SplashFooter
      - CreateAccountButton
      - SigninButton

- NavBar Container
  - NavBar
    - SearchBar
    - SigninButton
    - CreateAccountButton
    - NavDropdown Container
      - NavDropdown

- TrackView Container
  - TrackView
    - TrackBanner
      - TrackHeader
      - TrackWaveform
    - TrackDetail
      - CommentForm Container
        - CommentForm
      - TrackStats
      - ArtistTile
      - CommentIndex
        - Comment
    - TrackSideBar
      - SideTrackIndex
        - SideTrackIndexItem

- UserView Container
  - UserView
    - UserBanner
  - UserNav
  - TrackIndex
  - UserStats

- TrackIndexContainer
  - TrackIndex
    - TrackIndexItem
      - TrackWaveform
      - TrackStats

- Upload Container
  - Upload

- Stream Container
  - Browse
    - TrackIndex

- Charts Container
  - Browse
    - GenreDropdown Container
      - GenreDropdown
    - ChartIndex
      - ChartIndexItem

- Browse
  - BrowseNav
  - BrowseSideBar
    - UserStatsSummary

- SearchBar Container
  - SearchBar

## Routes

Path | Component
---- | ---------
/  |   App
/  |   Splash
/stream | Stream
/users/:id | UserView
/tracks/:id | TrackView
/charts | Charts
/upload | Upload
