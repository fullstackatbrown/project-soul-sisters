import { ChangeEvent, Dispatch, SetStateAction } from "react";

export type InvolvementFlags = {
  filmProd: boolean,
  performing: boolean,
  socialMedia: boolean,
  music: boolean,
  support: boolean,
  other: boolean,
};

type Props = {
  flags: InvolvementFlags
  setFlags: Dispatch<SetStateAction<InvolvementFlags>>
}

export default function InvolvementCheckboxes(props: Props) {
  function setFilmProd(e: ChangeEvent<HTMLInputElement>) {
    const flags = props.flags;
    flags.filmProd = e.target.checked;
    props.setFlags(flags);
  }

  function setPerforming(e: ChangeEvent<HTMLInputElement>) {
    const flags = props.flags;
    flags.performing = e.target.checked;
    props.setFlags(flags);
  }

  function setSocialMedia(e: ChangeEvent<HTMLInputElement>) {
    const flags = props.flags;
    flags.socialMedia = e.target.checked;
    props.setFlags(flags);
  }

  function setMusic(e: ChangeEvent<HTMLInputElement>) {
    const flags = props.flags;
    flags.music = e.target.checked;
    props.setFlags(flags);
  }

  function setSupport(e: ChangeEvent<HTMLInputElement>) {
    const flags = props.flags;
    flags.support = e.target.checked;
    props.setFlags(flags);
  }

  function setOther(e: ChangeEvent<HTMLInputElement>) {
    const flags = props.flags;
    flags.other = e.target.checked;
    props.setFlags(flags);
  }

  return <>
    <div>
      <input id="film-prod" type="checkbox" onChange={setFilmProd}/>
      <label htmlFor="film-prod">Film Production</label>
    </div>
    <div>
      <input id="performing" type="checkbox" onChange={setPerforming} />
      <label htmlFor="performing">Performing</label>
    </div>
    <div>
      <input id="social-media" type="checkbox" onChange={setSocialMedia} />
      <label htmlFor="social-media">Social Media</label>
    </div>
    <div>
      <input id="music" type="checkbox" onChange={setMusic} />
      <label htmlFor="music">Music</label>
    </div>
    <div>
      <input id="support" type="checkbox" onChange={setSupport} />
      <label htmlFor="support">Support</label>
    </div>
    <div>
      <input id="other" type="checkbox" onChange={setOther} />
      <label htmlFor="other">Other</label>
    </div>
  </>;
}
