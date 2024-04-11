"use client";

import RenameLayersCol from "./cols/rename-layers/rename-layers-col";
import AIBestieCol from "./cols/ai-bestie/ai-bestie-col";
import AISpellBookCol from "./cols/ai-spellbook/ai-spellbook-col";
import CreativityCol from "./cols/creativity/creativity-col";
import MagicCopyrights from "./cols/magic-copyrights/magic-copyrights";
import SvgIcons from "./cols/svg-icons/svg-icons";
import AIMagic from "./cols/ai-magic/ai-magic";
import MagicImage from "./cols/magic-image/magic-image";
import RenameLayersColSmall from "./cols/rename-layers/rename-layers-col-small";

const Grid = () => {
  return (
    <div className="container relative z-10 -mt-10 grid space-y-5 lg:-mt-40 lg:grid-cols-4 lg:gap-5 lg:space-y-0">
      {/* Row 1 */}
      {/* Col 1 */}
      <AIMagic />

      {/* Col 2 */}
      <SvgIcons />

      {/* Col 3 */}
      <CreativityCol />

      {/* Row 2 */}
      {/* col 1 */}
      <MagicImage />

      {/* col 2 */}
      <MagicCopyrights />

      {/* Row 3 */}
      {/* col 1 */}
      <AISpellBookCol />

      {/* col 2 */}
      <RenameLayersColSmall />
      <RenameLayersCol />

      {/* col 3 */}
      <AIBestieCol />
    </div>
  );
};

export default Grid;
