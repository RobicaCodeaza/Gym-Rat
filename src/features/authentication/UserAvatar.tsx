import defaultUser from '/default-user.jpg'

type UserAvatarProps = {
    fullName: string
    avatar: string
}

function UserAvatar({ fullName, avatar }: UserAvatarProps) {
    return (
        <div className="ml-auto flex items-center gap-5 text-[1.4rem] font-medium">
            <img
                className="border-mako-grey-100 block aspect-square w-12 rounded-full border object-cover phone:w-14 tab-land:w-16"
                src={avatar ?? defaultUser}
                alt={`Avatar of ${fullName}`}
            ></img>
        </div>
    )
}

export default UserAvatar
