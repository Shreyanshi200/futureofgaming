import BrowserSINext from "./BrowserSINext";
import PropTypes from "prop-types";
import "./HudSettings.css";

const HudSettings = ({className=" ", settings,advanced,rules }) => {
  return (
    <div className={`hud-settings ${className}`}>
      <div className="hud-container">
        <div className="hud-options">
          <div className="hud-block">
            <div className="regenerative-health-setting ">
              <div className="hud-toggle ">
                <div className="hud">hud</div>
                <div className="hud-value">
                  <div className="on6">{advanced.hud}</div>
                  <div className="respawn-time-container common-btn">
                    <div className="player-respawn-time">
                      player respawn time
                    </div>
                  </div>
                  <div className="hud-status">{rules.playerrespawn}</div>
                </div>
              </div>
            </div>
            <div className="divider">
              <div className="separator" />
              <div className="separator1" />
            </div>
            <div className="enemy-tag-setting">
              <div className="vehicle-cam-toggle">
                <div className="p-vehicle-cam-wrapper">
                  <div className="p-vehicle-cam">3p vehicle cam</div>
                </div>
                <div className="idle-kick-setting">
                  <div className="on7">{advanced.Pvehiclecam}</div>
                  <div className="kick-after-idle">kick after idle</div>
                </div>
                <div className="vehicle-cam-description">{rules.kickafteridle}</div>
              </div>
            </div>
            <div className="divider1">
              <div className="separator2" />
              <div className="separator3" />
            </div>
            <div className="d-spotting-value">
              <div className="regenerative-health-value">
                <div className="regenerative-health">regenerative health</div>
                <div className="ban-after-kicks-setting">
                  <div className="on8">{advanced.regenerativehealth}</div>
                  <div className="ban-after-kicks">ban after kicks</div>
                </div>
                <div className="regenerative-health-toggle">{rules.banafterkicks}</div>
              </div>
            </div>
            <div className="kill-cam-container">
              <div className="divider2" />
              <div className="divider3" />
            </div>
            <div className="friendly-fire-value">
              <div className="kill-cam-value">
                <div className="kill-cam">{advanced.killcam}</div>
                <div className="on9">on</div>
              </div>
            </div>
            <div className="friendly-fire-separator" />
            <div className="vehicle-cam-value">
              <div className="friendly-fire-toggle">
                <div className="friendly-fire">friendly fire</div>
                <div className="off2">{advanced.friendlyfire}</div>
              </div>
            </div>
            <div className="d-spotting-separator" />
            <div className="kill-cam-setting">
              <div className="d-spotting-toggle">
                <div className="d-spotting">3d spotting</div>
                <div className="on10">{advanced.dspotting}</div>
              </div>
            </div>
            <div className="enemy-name-tags-separator" />
            <div className="hud-element">
              <div className="enemy-tag">
                <div className="enemy-name-tags">enemy name tags</div>
                <div className="on11">{advanced.enemynametags}</div>
              </div>
            </div>
            <div className="hud-block-child" />
          </div>
        </div>
        <div className="bottom-menu-container">
          <div className="map-rotation-container">
            <div className="side-menu-misc">
              <img
                className="side-menu-help-icon"
                loading="lazy"
                alt=""
                src="/sidemenu--help.svg"
              />
              <div className="side-menu-help-popup">
                <div className="help">help</div>
              </div>
            </div>
            <div className="map-rotation-label">
              <div className="map-rotation">map rotation</div>
            </div>
          </div>
          <div className="quit-button-container">
            <div className="side-menu-misc1">
              <img
                className="side-menu-quit-icon"
                loading="lazy"
                alt=""
                src="/sidemenu--quit.svg"
              />
              <div className="side-menu-quit-popup">
                <div className="quit">Quit</div>
              </div>
            </div>
            <div className="next-map-container">
              <div className="browser-si-next-w">
                <BrowserSINext
                  browserSINextImageW="/browser--sinextimagew@2x.png"
                  dawnbreaker="dawnbreaker"
                />
                <BrowserSINext
                  browserSINextImageW="/browser--sinextimagew-1@2x.png"
                  dawnbreaker="propaganda"
                />
                <BrowserSINext
                  browserSINextImageW="/browser--sinextimagew-2@2x.png"
                  dawnbreaker="operation locker"
                />
                <BrowserSINext
                  browserSINextImageW="/browser--sinextimagew-3@2x.png"
                  dawnbreaker="lancang dam"
                />
                <div className="next-map-selector" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HudSettings.propTypes = {
  className: PropTypes.string,
};

export default HudSettings;
