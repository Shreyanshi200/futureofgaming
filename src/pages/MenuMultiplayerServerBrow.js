import JoinBackground from "../components/JoinBackground";
import Invite from "../components/Invite";
import HudSettings from "../components/HudSettings";
import "./MenuMultiplayerServerBrow.css";
import { useState,useEffect } from "react";
const MenuMultiplayerServerBrow = () => {
  const [settings, setSettings] = useState({});
  const [advanced, setAdvanced] = useState({});
  const [rules, setRules] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const settingsResponse = await fetch("https://battlefield-zsqw.onrender.com/api/settings");
      const settingsData = await settingsResponse.json();
      setSettings(settingsData);

      const advancedResponse = await fetch("https://battlefield-zsqw.onrender.com/api/advanced");
      const advancedData = await advancedResponse.json();
      setAdvanced(advancedData);

      const rulesResponse = await fetch("https://battlefield-zsqw.onrender.com/api/rules");
      const rulesData = await rulesResponse.json();
      setRules(rulesData);
    };

    fetchData();
  }, []);
  return (
    <div className="menu-multiplayer-server-brow">
      <div className="wrapper-menu-background">
        <img
          className="menu-background-icon"
          alt=""
          src="/menu--background@2x.png"
        />
      </div>
      <div className="side-menu-line" />
      <div className="frame-parent">
        <div className="menu-options-parent">
          <div className="menu-options">
            <div className="side-menu-instances">
              <img
                className="side-menu-icon"
                loading="lazy"
                alt=""
                src="/sidemenu@2x.png"
              />
              <img
                className="side-menu-icon1"
                loading="lazy"
                alt=""
                src="/sidemenu-1@2x.png"
              />
              <div className="side-menu">
                <img
                  className="side-menu-game-icon"
                  loading="lazy"
                  alt=""
                  src="/sidemenu--game@2x.png"
                />
                <div className="side-menu-line-game" />
              </div>
              <div className="second-menu-option">
                <img
                  className="side-menu-icon2"
                  loading="lazy"
                  alt=""
                  src="/sidemenu-2@2x.png"
                />
                <div className="nested-option">
                  <img
                    className="side-menu-icon3"
                    loading="lazy"
                    alt=""
                    src="/sidemenu-3@2x.png"
                  />
                </div>
                <div className="nested-option1">
                  <img
                    className="side-menu-icon4"
                    loading="lazy"
                    alt=""
                    src="/sidemenu-4.svg"
                  />
                </div>
                <div className="nested-option2">
                  <div className="side-menu1">
                    <div className="side-menu-news">
                      <div className="news-content" />
                      <div className="news-content1" />
                      <div className="news-content2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-group">
            <div className="server-info-top-wrapper">
              <div className="server-info-top">
                <div className="breadcrumb">
                  <div className="frame-container">
                    <div className="back-wrapper">
                      <img
                        className="back-icon"
                        loading="lazy"
                        alt=""
                        src="/back.svg"
                      />
                    </div>
                    <nav className="previous-breadcrumb-parent">
                      <div className="previous-breadcrumb">
                        <div className="browser-breadcrumb-previous">
                          <a className="multiplayer">multiplayer</a>
                        </div>
                      </div>
                      <h3 className="breadcrumb-separator">/</h3>
                      <div className="server-browser-wrapper">
                        <a className="server-browser">server browser</a>
                      </div>
                    </nav>
                  </div>
                  <div className="server-info-wrapper">
                    <h1 className="server-info">server info</h1>
                  </div>
                </div>
                <h3 className="server-info-separator">/</h3>
              </div>
            </div>
            <div className="frame-div">
              <div className="nasa-noobs-welcome-conques-parent">
                <h1 className="nasa-noobs">
                  #1| NASA | Noobs Welcome | Conquest 40Hz
                </h1>
                <div className="frame-parent1">
                  <div className="conquest-large-siege-of-shan-wrapper">
                    <div className="conquest-large-">
                      conquest large - siege of shanghai - normal - 40 hz
                    </div>
                  </div>
                  <div className="server-protected-by-container">
                    <p className="server-protected-by">
                      Server protected by The_K-50 AntiCheat. Vip !Rules,
                      Questions, Request, Appeal, Visit us: www.epg.gg | Discord
                    </p>
                    <p className="httpsdiscordgg3r5nk4d">
                      https://discord.gg/3r5NK4d
                    </p>
                  </div>
                </div>
              </div>
              <div className="frame-parent2">
                <div className="join-button-instance-parent">
                  <div className="join-button-instance ">
                    <div className="browser-si-buttons common-btn">
                      <div className="join ">join</div>
                      <JoinBackground />
                    </div>
                  </div>
                  <div className="server-info-left">
                    <div className="player-count">
                      <div className="players">players</div>
                      <div className="ping-value">
                        <div className="ping-unit">64/64</div>
                      </div>
                    </div>
                    <div className="player-count1">
                      <div className="ping">ping</div>
                      <div className="ms-wrapper">
                        <div className="ms">47ms</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="browser-si-buttons-parent ">
                  <div className="browser-si-buttons1 common-btn">
                    <div className="spectate ">spectate</div>
                    <div className="spectate-background" />
                  </div>
                  <div className="tickrate-value-wrapper">
                    <div className="tickrate-value">
                      <div className="tickrate">tickrate</div>
                      <div className="hz">60 Hz</div>
                    </div>
                  </div>
                </div>
                <div className="browser-si-buttons2 common-btn">
                  <div className="join-as-commander ">join as commander</div>
                  <div className="commander-background" />
                </div>
                <div className="browser-si-buttons3 common-btn">
                  <div className="favorite-background" />
                  <img
                    className="favorite-icon "
                    loading="lazy"
                    alt=""
                    src="/favorite.svg"
                  />
                  <div className="div ">13672</div>
                </div>
              </div>
              <div className="server-settings">
        <div className="settings-block">
          <div className="settings-header">
            <div className="settings">settings</div>
          </div>
          <div className="settings-options">
            <div className="browser-si-region-w">
              <div className="region-selection">
                <div className="browser-si-region common-btn">
                  <div className="region ">Region</div>
                  <div className="europe-de">{settings.region}</div>
                </div>
              </div>
              <div className="region-separator" />
            </div>
            <div className="password-setting common-btn">
              <div className="punkbuster-preset-value ">
                <div className="punkbuster">punkbuster</div>
                <div className="on">{settings.punkbuster}</div>
                
              </div>
            </div>
            <div className="fair-fight-separator" />
            <div className="fair-fight-value">
              <div className="fairfight-parent common-btn">
                <div className="fairfight">fairfight</div>
                <div className="on1">{settings.fairfight}</div>
              </div>
            </div>
            <div className="password-separator" />
            <div className="punk-buster-preset">
              <div className="password-value common-btn">
                <div className="password">password</div>
                <div className="off">{settings.password}</div>
              </div>
            </div>
            <div className="punk-buster-preset1" />
            <div className="punk-buster-preset2">
              <div className="preset-parent common-btn">
                <div className="preset">preset</div>
                <div className="normal">{settings.preset}</div>
              </div>
            </div>
            <div className="punk-buster-preset3" />
          </div>
        </div>
        <div className="advanced-rules">
          <div className="advanced-rules-label">
            <div className="advanced">advanced</div>
          </div>
          <div className="minimap-tickets">
            <div className="balance-on-off">
              <div className="minimap-on-off common-btn">
                <div className="minimap">minimap</div>
                <div className="on2">{advanced.minimap}</div>
              </div>
            </div>
            <div className="minimap-tickets-child" />
            <div className="vehicles-setting">
              <div className="spawn-delay-label common-btn">
                <div className="only-squad-leader">
                  only squad leader spawn
                </div>
                <div className="off1">{advanced.onlySquadLeaderSpawn}</div>
              </div>
            </div>
            <div className="minimap-tickets-item" />
            <div className="vehicle-spawn">
              <div className="vehicles-label common-btn">
                <div className="vehicles">vehicles</div>
                <div className="on3">{advanced.vehicles}</div>
              </div>
            </div>
            <div className="minimap-tickets-inner" />
            <div className="advanced-rules1">
              <div className="balance-setting common-btn">
                <div className="team-balance">team balance</div>
                <div className="on4">{advanced.teamBalance}</div>
              </div>
            </div>
            <div className="rule-divider" />
            <div className="minimap-tickets-label">
              <div className="minimap-spotting-container common-btn">
                <div className="minimap-spotting">minimap spotting</div>
                <div className="on5">{advanced.minimapSpotting}</div>
              </div>
            </div>
            <div className="advanced-rules-divider" />
          </div>
        </div>
        <div className="advanced-rules2">
          <div className="rules-wrapper">
            <div className="rules">rules</div>
          </div>
          <div className="frame-parent3">
            <div className="frame-wrapper">
              <div className="tickets-parent common-btn">
                <div className="tickets">tickets</div>
                <div className="div1">{rules.tickets}</div>
              </div>
            </div>
            <div className="frame-child" />
            <div className="frame-wrapper1">
              <div className="vehicle-spawn-delay-parent common-btn">
                <div className="vehicle-spawn-delay">
                  vehicle spawn delay
                </div>
                <div className="div2">{rules.vehicleSpawnDelay}</div>
              </div>
            </div>
            <div className="frame-item" />
            <div className="team-kill-kick-container">
              <div className="bullet-damage-parent common-btn">
                <div className="bullet-damage">bullet damage</div>
                <div className="div3">{rules.bulletDamage}</div>
              </div>
            </div>
            <div className="frame-inner" />
            <div className="player-health-setting">
              <div className="team-kill-kick-setting common-btn">
                <div className="kick-after-team">
                  kick after team kills
                </div>
                <div className="team-kill-kick">{rules.kickAfterTeamKills}</div>
              </div>
            </div>
            <div className="line-div" />
            <div className="frame-wrapper2">
              <div className="player-health-parent common-btn">
                <div className="player-health">player health</div>
                <div className="player-health-setting1">{rules.playerHealth}</div>
              </div>
            </div>
            
            <div className="frame-child1" />
          </div>
        </div>
      </div>
            </div>
          </div>
        </div>
        <div className="friend-list">
          <Invite />
        </div>
      </div>
      <main className="background-overlay">
        <section className="menu-darker-bg" />
        <img
          className="germany-flag-icon"
          loading="lazy"
          alt=""
          src="/germanyflag.svg"
        />
      </main>
      <HudSettings settings={settings} advanced={advanced} rules={rules}/>
    </div>
  );
};

export default MenuMultiplayerServerBrow;
