import React from 'react';
import AsyncComponent from '@/components/AsyncComponent/index';

const Home = AsyncComponent(() => import('@/view/home/home'));
const Order = AsyncComponent(() => import('@/view/order/order'));
const Student = AsyncComponent(() => import('@/view/student/student'));
const AppSetting = AsyncComponent(() => import('@/view/setting/app/app'));
const Protocol = AsyncComponent(() => import('@/view/setting/protocol/protocol'));
const ProtocolEdit = AsyncComponent(() => import('@/view/setting/protocol/edit'));
const CourseSetting = AsyncComponent(() => import('@/view/setting/course/course'));
const PasswordSetting = AsyncComponent(() => import('@/view/setting/password/password'));
const AuthSetting = AsyncComponent(() => import('@/view/setting/auth/auth'));
const UserManagerSetting = AsyncComponent(() => import('@/view/setting/userManager/userManager'));
const QuestionPractice = AsyncComponent(() => import('@/view/question/practice/practice'));
const QuestionEdit = AsyncComponent(() => import('@/view/question/edit'));
const QuestionExam = AsyncComponent(() => import('@/view/question/exam/exam'));
const QuestionExamQuestion = AsyncComponent(() => import('@/view/question/exam/question'));
const Product = AsyncComponent(() => import('@/view/product/product'));
const ProductEdit = AsyncComponent(() => import('@/view/product/edit'));
const VideoCourse = AsyncComponent(() => import('@/view/video/course/course'));
const VideoBindQuestion = AsyncComponent(() => import('@/view/video/course/bindquestion'));
const VideoMp4 = AsyncComponent(() => import('@/view/video/mp4/mp4'));

const FeedbackVideo = AsyncComponent(() => import('@/view/feedback/video'));
const FeedbackQuestion = AsyncComponent(() => import('@/view/feedback/question'));
const FeedbackNote = AsyncComponent(() => import('@/view/feedback/note'));
const FeedbackManifesto = AsyncComponent(() => import('@/view/feedback/manifesto'));

const Testa = AsyncComponent(() => import('@/view/test/a'));

import VSvg from '@/components/common/v-svg';

const MenuIcon = ({ icon }) => {
    return <span className="anticon">
        <VSvg
            color="#ACBAD4"
            height="14px"
            icon={icon}
            width="14px" />
    </span>;
};


/**
 * 字段说明
 * title
 * path
 * icon 导航图标
 * component 组件
 * children 子组件
 * hiddenChildren default:undefined，true 的时候不显示该导航下的children
 * 导航只会显示
 */
export const Routes = [
    {
        title: '首页',
        path: '/',
        icon: <MenuIcon icon="iconshouye" />,
        component: <Home />
    },
    {
        title: '课程订单',
        path: '/order',
        icon: <MenuIcon icon="iconkechengdingdan" />,
        component: <Order />
    },
    {
        title: '学员管理',
        path: '/student',
        icon: <MenuIcon icon="iconxueyuanguanli" />,
        component: <Student />
    },
    {
        title: '商品管理',
        path: '/product',
        icon: <MenuIcon icon="iconshangpinguanli" />,
        component: <Product />,
        hiddenChildren: true,
        children: [
            {
                title: '编辑商品',
                path: '/product/edit/:id',
                component: <ProductEdit />
            }
        ]
    },
    {
        title: '视频管理',
        path: '/video',
        icon: <MenuIcon icon="iconshipinguanli" />,
        children: [
            {
                title: '课程视频',
                path: '/video/course',
                component: <VideoCourse />,
                icon: <MenuIcon icon="iconkechengshipin" />,
                hiddenChildren: true,
                children: [
                    {
                        title: '绑题',
                        path: '/video/course/bind',
                        component: <VideoBindQuestion />,
                    }
                ]
            },
            {
                title: '视频/音频题',
                path: '/video/mp4',
                icon: <MenuIcon icon="iconshipin-yinpinti" />,
                component: <VideoMp4 />
            },
        ]
    },
    {
        title: '试题管理',
        path: '/question',
        icon: <MenuIcon icon="iconshitiguanli" />,
        children: [
            {
                title: '练习试题',
                path: '/question/practice',
                icon: <MenuIcon icon="iconlianxishiti" />,
                component: <QuestionPractice />,
                children: [
                    {
                        title: '编辑试题',
                        path: '/question/practice/edit/:id',
                        component: <QuestionEdit />
                    },
                ]
            },
            {
                title: '套卷试题',
                path: '/question/exam',
                icon: <MenuIcon icon="icontaojuanshiti" />,
                component: <QuestionExam />,
                hiddenChildren: true,
                children: [
                    {
                        title: '查看套卷',
                        path: '/question/exam/question/:id',
                        component: <QuestionExamQuestion />,
                    },
                    {
                        title: '编辑试题',
                        path: '/question/exam/edit/:id',
                        component: <QuestionEdit />
                    },
                ]
            },
        ]
    },
    {
        title: '反馈审核',
        path: '/feedback',
        icon: <MenuIcon icon="iconfankuishenhe" />,
        children: [
            {
                title: '视频反馈',
                path: '/feedback/video',
                icon: <MenuIcon icon="iconshipinfankui" />,
                component: <FeedbackVideo />
            },
            {
                title: '试题反馈',
                path: '/feedback/question',
                icon: <MenuIcon icon="iconshitifankui" />,
                component: <FeedbackQuestion />
            },
            {
                title: '笔记审核',
                path: '/feedback/note',
                icon: <MenuIcon icon="iconbijishenhe" />,
                component: <FeedbackNote />
            },
            {
                title: '宣言审核',
                path: '/feedback/manifesto',
                icon: <MenuIcon icon="iconxuanyanshenhe" />,
                component: <FeedbackManifesto />
            },
            {
                title: '吐槽反馈',
                path: '/feedback/tucao',
                icon: <MenuIcon icon="icontucaofankui" />,
            },
        ]
    },
    {
        title: '系统配置',
        path: '/setting',
        icon: <MenuIcon icon="iconxitongpeizhi" />,
        children: [
            {
                title: '课程结构',
                path: '/setting/cursor',
                icon: <MenuIcon icon="iconkechengjiegou" />,

                component: <CourseSetting />
            },
            {
                title: 'APP配置',
                path: '/setting/app',
                icon: <MenuIcon icon="iconAPPpeizhi" />,

                component: <AppSetting />
            },
            {
                title: '协议管理',
                path: '/setting/protocol',
                icon: <MenuIcon icon="iconxieyiguanli" />,

                component: <Protocol />,
                children: [
                    {
                        title: '添加协议',
                        path: '/setting/protocol/edit',
                        component: <ProtocolEdit />,
                    }
                ]
            },
            {
                title: '角色权限',
                path: '/setting/auth',
                icon: <MenuIcon icon="iconjiaosequanxian" />,

                component: <AuthSetting />
            },
            {
                title: '用户管理',
                path: '/setting/user',
                icon: <MenuIcon icon="iconyonghuguanli" />,

                component: <UserManagerSetting />
            },
            {
                title: '修改密码',
                path: '/setting/password',
                icon: <MenuIcon icon="iconxiugaimima" />,

                component: <PasswordSetting />
            },
        ]
    },
];