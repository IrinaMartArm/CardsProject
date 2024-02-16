// import type { Meta, StoryObj } from '@storybook/react'
//
// import { useState } from 'react'
//
// import { Edit } from '@/components/assets/icons'
// import { ALLOWED_IMAGES_FORMATS, MAX_SIZE_IMAGE } from '@/components/constants'
// import { z } from 'zod'
//
// import { FileUploader } from './Uploader'
//
// const meta = {
// 	component: FileUploader,
// 	tags: ['autodocs'],
// 	title: 'components/FileUploader',
// } satisfies Meta<typeof FileUploader>
//
// export default meta
//
// type Story = StoryObj<typeof meta>
//
// const coverSchema = z
// 	.instanceof(File)
// 	.refine(
// 		file => file.size <= MAX_SIZE_IMAGE,
// 		`Max image size is 1MB. The file will not be uploaded.`
// 	)
// 	.refine(
// 		file => ALLOWED_IMAGES_FORMATS.includes(file.type),
// 		'Only .jpg, .jpeg, .png and .webp formats are supported. The file will not be uploaded.'
// 	)
//
// const ControlledUploader = () => {
// 	const [cover, setCover] = useState<File | null>(null)
//
// 	const coverIsValidImage = cover !== null && ALLOWED_IMAGES_FORMATS.includes(cover.type)
//
// 	return (
// 		<div style={{ display: 'flex', flexDirection: 'column', maxWidth: '500px' }}>
// 	<FileUploader setFile={setCover} trigger={<Edit />} validationSchema={coverSchema} />
// 	{coverIsValidImage && <img alt={'cover'} src={URL.createObjectURL(cover)} />}
// 	</div>
// 	)
// 	}
//
// 	export const ControlledImageUploader: Story = {
// 		args: {
// 			trigger: null,
// 			validationSchema: coverSchema,
// 		},
// 		render: args => <ControlledUploader {...args} />,
// }
export default {}
