/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.osrc.osaas.common.util;

import java.util.Base64;

/**
 * base64工具类
 * @author tom
 * @date 2022/1/12 12:12
 */
public class Base64Util {

    public static boolean isBase64(String base64) {
        try {
            return Base64.getDecoder().decode(base64) != null;
        } catch (Exception e) {
            return false;
        }
    }
}
