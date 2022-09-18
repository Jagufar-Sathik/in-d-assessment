import { MoreActionsPopover } from "@react-pdf-viewer/toolbar";
const RenderToolbar = (Toolbar) => (
  <Toolbar>
    {(toolbarSlot) => {
      const {
        CurrentPageInput,
        Download,
        EnterFullScreen,
        GoToNextPage,
        GoToPreviousPage,
        NumberOfPages,
        Open,
        Print,
        SwitchTheme,
        Zoom,
        ZoomIn,
        ZoomOut,
      } = toolbarSlot;

      return (
        <div
          className="rpv-toolbar"
          role="toolbar"
          aria-orientation="horizontal"
        >
          <div className="rpv-toolbar__left">
            <div className="rpv-core__display--hidden rpv-core__display--block-small">
              <div className="rpv-toolbar__item">
                <GoToPreviousPage />
              </div>
            </div>
            <div className="rpv-toolbar__item">
              <CurrentPageInput />{" "}
              <span className="rpv-toolbar__label">
                / <NumberOfPages />
              </span>
            </div>
            <div className="rpv-core__display--hidden rpv-core__display--block-small">
              <div className="rpv-toolbar__item">
                <GoToNextPage />
              </div>
            </div>
          </div>
          <div className="rpv-toolbar__center">
            <div className="rpv-toolbar__item">
              <ZoomOut />
            </div>
            <div className="rpv-core__display--hidden rpv-core__display--block-small">
              <div className="rpv-toolbar__item">
                <Zoom />
              </div>
            </div>
            <div className="rpv-toolbar__item">
              <ZoomIn />
            </div>
          </div>
          <div className="rpv-toolbar__right">
            <div className="rpv-core__display--hidden rpv-core__display--block-medium">
              <div className="rpv-toolbar__item">
                <SwitchTheme />
              </div>
            </div>
            <div className="rpv-core__display--hidden rpv-core__display--block-medium">
              <div className="rpv-toolbar__item">
                <EnterFullScreen />
              </div>
            </div>
            <div className="rpv-core__display--hidden rpv-core__display--block-medium">
              <div className="rpv-toolbar__item">
                <Open />
              </div>
            </div>
            <div className="rpv-core__display--hidden rpv-core__display--block-medium">
              <div className="rpv-toolbar__item">
                <Download />
              </div>
            </div>
            <div className="rpv-core__display--hidden rpv-core__display--block-medium">
              <div className="rpv-toolbar__item">
                <Print />
              </div>
            </div>
            <div className="rpv-toolbar__item">
              <MoreActionsPopover toolbarSlot={toolbarSlot} />
            </div>
          </div>
        </div>
      );
    }}
  </Toolbar>
);
export default RenderToolbar;
