import {
  assertWallpaperDefinition,
  createDialogueLineResolver,
  defineWallpaper,
} from "ba-memorial-lobby-wallpaper-runtime";

export type VoiceLocale = "ja" | "zh-cn" | "ko";
export type SubtitleLocale = "zh-cn" | "ja" | "ko" | "en";

// ---------------------------------------------------------------------------
// Project identity.
//
// This file is the single source of truth for character-specific content.
// Replace every placeholder value with the actual character data before
// building a wallpaper from this template. See docs/CREATING-A-PROJECT.md.
// ---------------------------------------------------------------------------
export const PROJECT = {
  id: "blue-archive-aris",
  slug: "aris",
  title: "Aris",
  editionLabel: `PUBLIC EDITION · ${__WALLPAPER_VERSION__}`,
} as const;

export const VOICE_LOCALES: readonly VoiceLocale[] = ["zh-cn","ja","ko"];
export const SUBTITLE_LOCALES: readonly SubtitleLocale[] = ["ja","ko"];

export const BGM = {
  title: "Daily Routine 247",
  path: `./assets/${PROJECT.slug}/bgm/my-character-bgm.flac`,
} as const;

export interface DialogueLine {
  id: string;
  text: Record<SubtitleLocale, string>;
}

export interface DialogueDefinition {
  index: number;
  motionAnimation: string;
  attachmentAnimation: string;
  duration: number;
  lines: readonly DialogueLine[];
}

// Replace the placeholder model/animation/bone values below with values
// obtained from `npm run inspect:spine` after placing the real model in
// local-assets/original/model/.
export const MODEL = {
  binary: `./assets/${PROJECT.slug}/model/my-character.skel`,
  atlases: {
    "2k": `./assets/${PROJECT.slug}/model/my-character.atlas`,
    "4k": `./assets/${PROJECT.slug}/model-4k/my-character.atlas`,
    "8k": `./assets/${PROJECT.slug}/model-8k/my-character.atlas`,
  },
  spineVersion: "4.2.33",
  introAnimation: "Start_Idle_01",
  idleAnimation: "Idle_01",
  designViewport: {
    width: 2560,
    height: 1600,
    centerX: 0,
    centerY: 900,
  },
  tracks: {
    base: 0,
    motion: 1,
    attachment: 2,
  },
  interaction: {
    eyeBone: "Touch_Eye",
    headControlBone: "Touch_Point",
    headAnchorBone: "Touch_Point_Key",
    lookAnimation: "Look_01_M",
    lookEndMotionAnimation: "LookEnd_01_M",
    lookEndAttachmentAnimation: "LookEnd_01_A",
    patMotionAnimation: "Pat_01_M",
    patAttachmentAnimation: "Pat_01_A",
    patEndMotionAnimation: "PatEnd_01_M",
    patEndAttachmentAnimation: "PatEnd_01_A",
    headRadius: { x: 270, y: 230 },
    bodyFromHead: { x: -70, y: -610, radiusX: 620, radiusY: 900 },
    eyeClamp: { x: 112.5, y: 200 },
    patClamp: 34,
    dragThresholdPixels: 9,
    cooldownSeconds: 0.55,
    dialogueGraceSeconds: 0.75,
  },
} as const;

// Example dialogue placeholders. Replace the ids with the real event ids used
// by the voice files and fill in the localized subtitle text.
export const DIALOGUES: readonly DialogueDefinition[] = [
  {
    "index": 1,
    "motionAnimation": "Talk_01_M",
    "attachmentAnimation": "Talk_01_A",
    "duration": 7.100000381469727,
    "lines": [
      {
        "id": "aris_memoriallobby_1",
        "durationSeconds": 7.1,
        "text": {
          "zh-cn": "",
          "ja": "アリスはキヴォトスに…\n魔法がないとは思えません。",
          "ko": "아리스는 키보토스에,\n마법이 없다고 생각하지 않습니다.",
          "en": ""
        }
      }
    ]
  },
  {
    "index": 2,
    "motionAnimation": "Talk_02_M",
    "attachmentAnimation": "Talk_02_A",
    "duration": 9,
    "lines": [
      {
        "id": "aris_memoriallobby_2_1",
        "durationSeconds": 9,
        "text": {
          "zh-cn": "",
          "ja": "魔法は存在しています。\nだって、先生は今、アリスを\n幸せにしてくれましたから。",
          "ko": "마법은 있습니다.\n선생님은 지금, 아리스를\n행복하게 만들었으니까요.",
          "en": ""
        }
      },
      {
        "id": "aris_memoriallobby_2_2",
        "durationSeconds": 9,
        "text": {
          "zh-cn": "",
          "ja": "魔法は存在しています。\nだって、先生は今、アリスを\n幸せにしてくれましたから。",
          "ko": "마법은 있습니다.\n선생님은 지금, 아리스를\n행복하게 만들었으니까요.",
          "en": ""
        }
      }
    ]
  },
  {
    "index": 3,
    "motionAnimation": "Talk_03_M",
    "attachmentAnimation": "Talk_03_A",
    "duration": 13.666666984558105,
    "lines": [
      {
        "id": "aris_memoriallobby_3_1",
        "durationSeconds": 8,
        "text": {
          "zh-cn": "",
          "ja": "ゲームが面白い\n理由はそこに、\n世界の美しさが込\nめられているから。",
          "ko": "게임이 재미있는 이유는\n그것이 이 세상의 아름다움을\n담고 있기 때문임을",
          "en": ""
        }
      },
      {
        "id": "aris_memoriallobby_3_2",
        "durationSeconds": 8,
        "text": {
          "zh-cn": "",
          "ja": "ゲームが面白い\n理由はそこに、\n世界の美しさが込\nめられているから。",
          "ko": "게임이 재미있는 이유는\n그것이 이 세상의 아름다움을\n담고 있기 때문임을",
          "en": ""
        }
      },
      {
        "id": "aris_memoriallobby_3_3",
        "durationSeconds": 5.667,
        "text": {
          "zh-cn": "",
          "ja": "これは、先生を通じて\nわかったことです。",
          "ko": "선생님을 통해 알게 되었습니다.",
          "en": ""
        }
      }
    ]
  },
  {
    "index": 4,
    "motionAnimation": "Talk_04_M",
    "attachmentAnimation": "Talk_04_A",
    "duration": 15.666667938232422,
    "lines": [
      {
        "id": "aris_memoriallobby_4_1",
        "durationSeconds": 9.167,
        "text": {
          "zh-cn": "",
          "ja": "ゲームも、猫も、友達も…\nそして今この瞬間も。",
          "ko": "게임도, 고양이도, 친구들도…\n그리고 이 순간도.",
          "en": ""
        }
      },
      {
        "id": "aris_memoriallobby_4_2",
        "durationSeconds": 6.5,
        "text": {
          "zh-cn": "",
          "ja": "この世界には美しいものが\nたくさんあります。",
          "ko": "이 세상에는 아름다운\n것들이 많습니다.",
          "en": ""
        }
      }
    ]
  },
  {
    "index": 5,
    "motionAnimation": "Talk_05_M",
    "attachmentAnimation": "Talk_05_A",
    "duration": 11.666666984558105,
    "lines": [
      {
        "id": "aris_memoriallobby_5_1",
        "durationSeconds": 6.067,
        "text": {
          "zh-cn": "",
          "ja": "アリスはもっと知りたいです。\n先生と一緒に…",
          "ko": "아리스는 더 알고 싶습니다.\n선생님과 함께…",
          "en": ""
        }
      },
      {
        "id": "aris_memoriallobby_5_2",
        "durationSeconds": 5.6,
        "text": {
          "zh-cn": "",
          "ja": "この世界のことをもっと\n学びたいです！",
          "ko": "이 세상을 더 배우고 싶습니다!",
          "en": ""
        }
      }
    ]
  }
] as const;

export function voicePath(eventId: string, locale: VoiceLocale): string {
  return `./assets/${PROJECT.slug}/audio/${locale}/${eventId.toLowerCase()}.ogg`;
}

export const WALLPAPER_DEFINITION = defineWallpaper({
  schemaVersion: 1,
  id: PROJECT.id,
  model: {
    binary: MODEL.binary,
    atlases: MODEL.atlases,
    spineVersion: MODEL.spineVersion,
    designViewport: MODEL.designViewport,
  },
  animations: {
    intro: MODEL.introAnimation,
    idle: MODEL.idleAnimation,
    tracks: MODEL.tracks,
  },
  interactions: {
    eyeBone: MODEL.interaction.eyeBone,
    headControlBone: MODEL.interaction.headControlBone,
    headAnchorBone: MODEL.interaction.headAnchorBone,
    look: {
      animation: MODEL.interaction.lookAnimation,
      endMotionAnimation: MODEL.interaction.lookEndMotionAnimation,
      endAttachmentAnimation: MODEL.interaction.lookEndAttachmentAnimation,
    },
    pat: {
      motionAnimation: MODEL.interaction.patMotionAnimation,
      attachmentAnimation: MODEL.interaction.patAttachmentAnimation,
      endMotionAnimation: MODEL.interaction.patEndMotionAnimation,
      endAttachmentAnimation: MODEL.interaction.patEndAttachmentAnimation,
    },
    headRadius: MODEL.interaction.headRadius,
    bodyFromHead: MODEL.interaction.bodyFromHead,
    eyeClamp: MODEL.interaction.eyeClamp,
    patClamp: MODEL.interaction.patClamp,
    dragThresholdPixels: MODEL.interaction.dragThresholdPixels,
    cooldownSeconds: MODEL.interaction.cooldownSeconds,
    dialogueGraceSeconds: MODEL.interaction.dialogueGraceSeconds,
  },
  dialogues: DIALOGUES.map((dialogue) => ({
    index: dialogue.index,
    motionAnimation: dialogue.motionAnimation,
    attachmentAnimation: dialogue.attachmentAnimation,
    durationSeconds: dialogue.duration,
    lines: dialogue.lines,
  })),
  audio: {
    bgm: BGM,
    voicePath,
    voiceLocales: VOICE_LOCALES,
    subtitleLocales: SUBTITLE_LOCALES,
  },
});

assertWallpaperDefinition(WALLPAPER_DEFINITION);

export const findDialogueLine = createDialogueLineResolver(
  WALLPAPER_DEFINITION.dialogues,
);
