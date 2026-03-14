import { RichText } from '@payloadcms/richtext-lexical/react'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'

const RichTextRenderer = ({ content }: { content: SerializedEditorState }) => {
  if (!content) return null;
  return <RichText data={content} />;
};

export default RichTextRenderer
