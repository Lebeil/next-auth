import React from 'react';
import {useRouter} from "next/router";
import Link from "next/link";

const Navbar = () => {
    const router = useRouter()

    const styles = {
        navbar: {
            padding: 30,
            margin: 30,
            border: "1px solid #DDD"
        },
        link: {
            margin: 15
        },
        active: {
            margin: 15,
            color: 'blue'
        }
    }

    return (
        <div style={styles.navbar}>
            <Link href="/">
                <a>
                    <span style={router.pathname === "/" ? styles.active : styles.link}>Home</span>
                </a>

            </Link>
            <Link href="/profile">
                <a>
                    <span style={router.pathname === "/profile" ? styles.active : styles.link}>Profile</span>
                </a>
            </Link>
            <Link href="/dashboard">
                <a>
                    <span style={router.pathname === "/dashboard" ? styles.active : styles.link}>Dashboard</span>
                </a>

            </Link>

        </div>
    );
};

export default Navbar;
